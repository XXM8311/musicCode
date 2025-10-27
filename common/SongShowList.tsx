import React, { FC, memo, ReactNode, useState } from 'react';
import {SongShowListWapper} from '@/styles/PlayerBar/SongShowListWapper'
import {formatTime} from '@/utils/format'
import { useAppDispatch } from '@/store';
import { fetchGetSongDetail, hangleChangePlayIng } from '@/store/modules/playerSongDetail';
import classNames from 'classnames';
import playIcon from '@/assets/plsyOnly.png'
interface PropsInterface {
  children?: ReactNode,
  songList:any[]
}

const Index: FC<PropsInterface> = memo((props) => {
  const [selectIndex,setSelectIndex]=useState(-1)
  const dispatch=useAppDispatch()
  //播放
    const toPlay=(id:number)=>{
        dispatch(fetchGetSongDetail(id))
        dispatch(hangleChangePlayIng(true))
    }
    //鼠标移动
    const hangleOver=(index:number)=>{
      setSelectIndex(index)
    }
  return (
    <SongShowListWapper>
    <div className='songShowList'>
        <div className='title'>
            <p className='titleName'>标题</p>
            <p className='albumName'>专辑</p>
            <p className='songTime'>时长</p>
        </div>
        {props.songList.map((item:any,index:number)=>{
            return(
                <div className={classNames('songItem',{active:index===selectIndex})}
                 key={item.id}
                  onClick={()=>{toPlay(item.id)}} 
                  onMouseOver={()=>{hangleOver(index)}}
                  onMouseOut={()=>{ setSelectIndex(-1)}}
                  >
                    <div className='songInfo'>
                    <div className='songIndex'>{index==selectIndex?<div className='playIcon'><img src={playIcon} /></div>:String(index+1).padStart(2,'0')}</div>
                    <div className='songCover'><img src={item.al.picUrl+'?param=100x100'} /></div>
                    <div>
                    <div className='songName'>{item.name}</div>
                    <div className='songSinger'>{item?.ar.map((item:any)=>{return item.name}).join('/')}</div>
                    </div>
                    </div>
                    <div className='albumName'>{item.al.name}</div>
                    <div className='songTime'>{formatTime(item.dt)}</div>
                </div>
            )
        })}
    </div>
    </SongShowListWapper>
  );
});

export default Index;
