import React, { FC, forwardRef, memo, ReactNode, Ref, useEffect, useRef, useState } from 'react';
import {PlayListWapper} from '@/styles/PlayerBar/PlayListWapper'
import { appShallowEqual, useAppDispatch, useAppSelector } from '@/store';
import { Clear } from '@/components/icon/Clear';
import { formatTime } from '@/utils/format';
import { fetchGetSongDetail, hangleChangePlayIng } from '@/store/modules/playerSongDetail';
import classNames from 'classnames';
interface PropsInterface {
  children?: ReactNode;
  ref:Ref<HTMLDivElement>,
  hangleChangeShowPlayList: () => void
}

const Index: FC<PropsInterface> = memo(forwardRef((props)=>{
  const dispatch=useAppDispatch()
  const {playSongList,songDetail}=useAppSelector((state)=>({
    playSongList:state.playerSongDetail.playSongList,
    songDetail:state.playerSongDetail.songDetail
  }),appShallowEqual)
  
  const [selectItemIndex,setSelectItemIndex]=useState(-1)
//当前播放歌曲
 const isPlayItemRef=useRef<HTMLDivElement>(null)
 useEffect(()=>{
  const filterIndex=playSongList.findIndex((item)=>item.id===songDetail[0].id)
  if(filterIndex!==-1){
    isPlayItemRef.current?.children[filterIndex].scrollIntoView(
     { behavior:'smooth',
      block: 'center', //垂直居中于视图中
      inline: 'center'//水平居中于视图中 
    }
    )
  }

},[songDetail[0].id])

  //鼠标移开隐藏播放列表
  const hangelePlayListLeave=()=>{
    props.hangleChangeShowPlayList()
  }
  //播放单曲
  const toPlay=(id:number)=>{
    dispatch(fetchGetSongDetail(id))
    dispatch(hangleChangePlayIng(true))
  }
  //鼠标移入
  const hangleListItemOver=(index:number)=>{
    setSelectItemIndex(index)
  }
  //鼠标移除
  const hangleListItemLeave=()=>{
   setSelectItemIndex(-1)
  }
  return (
    <PlayListWapper  onMouseLeave={hangelePlayListLeave} > 
     {
      playSongList.length>0? 
      <div className='playList' >
        <div className='playListHeader'>
       <div>
       <span className='playListTitle'>播放列表</span>
       <span className='playListCount'>{playSongList.length}首</span>
       </div>
       <div className='playListBtn'>
          <Clear></Clear><span>清空</span>
       </div>
        </div>

        <div className='playListContent' ref={isPlayItemRef}>
        {
          playSongList.map((item,index)=>{
            return(
              <div className={classNames('playListItem',{selectItem:index==selectItemIndex})}
              key={item.id} 
              onClick={()=>{toPlay(item.id)}}
              onMouseOver={()=>{hangleListItemOver(index)}}
              onMouseLeave={hangleListItemLeave}
              >
                <div className='playListItemIcon'><img src={item.al.picUrl+'?param=50x50'}/></div>
                <div className={classNames('playListItemInfo',{selectItemInfo:item.id===songDetail[0].id})}>
                  <div className='playListItemName'>{item.name}</div>
                  <div className='playListItemAuthor'>{item.ar.map((item:any)=>item.name).join('/')}</div>
                </div>
                <div className='playListItemTime'>
                  {formatTime(item.dt)}
                </div>
              </div>
            )
          })
        }
        </div>
      </div>:
      <div className='noMoreSong'>
        暂无歌曲
      </div>
     }
    </PlayListWapper>
  );
}))

export default Index;
