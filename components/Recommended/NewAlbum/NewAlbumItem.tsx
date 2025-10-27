import React, { FC, memo, ReactNode } from 'react';
import {NewAlbumItemWapper} from '@/styles/view/Recommended/NewAlbum/NewAlbumItemWapper'
import {getAlbumDetail, getLyri} from '@/service/api/playerBar'
import { appShallowEqual, useAppDispatch, useAppSelector } from '@/store';
import { hangleChangePlayIng, hangleLyricList, hanglePlaySongIndex, hanglePlaySongList, hangleSongDetail } from '@/store/modules/playerSongDetail';
import { formatLyric } from '@/utils/format';
interface newAlbumListType{
    id:number,
    name:string,
    picUrl:string,
    subType:string,
    artist:artistType
  }
interface artistType{
  name:string
}
interface PropsInterface {
  children?: ReactNode;
  itemData:newAlbumListType
}
const Index: FC<PropsInterface> = memo((props) => {
    const {itemData} = props        
    const dispatch=useAppDispatch()
    const {playSongList}=useAppSelector((state)=>({
      playSongList:state.playerSongDetail.playSongList
    }),appShallowEqual)
    //播放
    const toPlay = async(id:number)=>{ 
      const res :any=await getAlbumDetail(id)
      const songCover=res.data.album.picUrl
      const newSongList = res.data.songs.map((item:any)=>{
        return{
          ...item,
          al:{...item.al, picUrl:songCover}
        }
      })
      const lyriRes:any=await getLyri(res.data.songs[0].id)
      if(lyriRes.data.lrc){
      dispatch(hangleLyricList(formatLyric(lyriRes.data.lrc.lyric)))
      }
      const newPlayList=[...playSongList]
      newPlayList.push(newSongList[0])
        dispatch(hangleSongDetail(newSongList))
        dispatch(hanglePlaySongList(newPlayList))
        dispatch(hanglePlaySongIndex(newPlayList.length-1))
        dispatch(hangleChangePlayIng(true))
    }
  return (
    <NewAlbumItemWapper>
      <div onClick={()=>{toPlay(itemData.id)}}>
      <div className='top'>
    <img src={itemData.picUrl+'?params=500x500'} />
    </div>
    <div className='bottom'>
    <div className='name'>{itemData.name}</div>
    <div className='artist'>{itemData.artist.name}</div>
    </div>
      </div>
    </NewAlbumItemWapper>
  );
});

export default Index;
