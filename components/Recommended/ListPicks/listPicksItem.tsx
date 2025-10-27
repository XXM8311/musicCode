import React, { FC, forwardRef, memo, ReactNode, Ref, useState } from 'react';
import {ListPicksItemWapper} from '@/styles/view/Recommended/ListPicks/ListPicksItemWapper'
import { useAppDispatch } from '@/store';
import { fetchGetSongDetail, hangleChangePlayIng, hanglePlaySongList } from '@/store/modules/playerSongDetail';
import selectIcon from '@/assets/playSongList.png'
interface PropsInterface {
  children?: ReactNode;
  itemList:any
}

const Index: FC<PropsInterface> = memo((props) => {
  const {itemList}=props
  const dispatch=useAppDispatch()
  const [selectItemListId,setSelectItemListId]=useState(-1)
  //点击排行榜前三单曲
  const toPlay=(id:number)=>{
    dispatch(fetchGetSongDetail(id))
    dispatch(hangleChangePlayIng(true))
  }
  const toPlayAll=(tracks:any)=>{
    dispatch(hanglePlaySongList(tracks))
    dispatch(fetchGetSongDetail(tracks[0].id))
    dispatch(hangleChangePlayIng(true))
  }

  const hangelOver=(id:number)=>{
    setSelectItemListId(id)
  }
return (
  <ListPicksItemWapper>
  <div className='listPickItem' onMouseOver={()=>{hangelOver(itemList.id)}} onMouseOut={()=>{setSelectItemListId(-1)}} onClick={()=>{toPlayAll(itemList.tracks)}} >
  <div className='title'>
      {itemList.name}
  </div>
  <div className='content' >
       <div className='cover' >
          {(()=>{
            const imgUrlList=itemList.tracks.slice(0,3).map((item:any)=>{return item.al.picUrl})
            return imgUrlList.map((item:any,index:number)=>{
              return <img key={index} src={item+'?param=500x500'} className={`coverImg${index+1}`} />
            })
          })()}
       </div>
      <div className='tracksList'>
          {itemList.tracks.slice(0,3).map((item:any,index:number)=>{
              return <div key={item.id} className='tracksListInfo'  onClick={()=>{toPlay(item.id)}}>
                  <span className='singerName'>{index+1} {item.name}</span>-
                  <span className='singSinger'>{item.ar.map((item:any)=>item.name).join('/')}</span>
                  </div>
          })}
      </div>
  </div>
  {selectItemListId===itemList.id&&<img src={selectIcon} className='selectIcon' />}
  </div>
  </ListPicksItemWapper>
);
})

export default Index;
