import React, { FC, memo,ReactNode } from 'react';
import { SongListWapper } from '@/styles/view/Recommended/HotRecommendation/SongListWapper';
import {PlayCount} from '@/components/icon/PlayCount'
import {formatPlayCount} from '@/utils/format'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/store';
import { changeIsFullScreenDetailed } from '@/store/modules/recommended';
interface SongListType {
  id: number;
  name: string;
  picUrl: string;
  playCount: number;
}

interface PropsInterface {
  children?: ReactNode;
  songList: SongListType[];
}

const Index: FC<PropsInterface> = memo((props) => {
  const naviget=useNavigate()
  const dispatch=useAppDispatch()
  const toDetail=(id:number)=>{
    naviget('/XxmMusic/RecommendedDetails',{state:id})
    dispatch(changeIsFullScreenDetailed(true))
  }
  return (
    <>
    <SongListWapper  >
      {props.songList.map((item: SongListType) => (
          <div className='songList' key={item.id} onClick={()=>{toDetail(item.id)}}>
          <img src={item.picUrl+'?param=500x500'}/>
          <div className='playCount'>
          <PlayCount></PlayCount>
          <div className='countNum'>{formatPlayCount(item.playCount)}</div>
          </div>
          <div>
          <div className='songName'>{item.name}</div>
          </div>
          </div>
      ))}
    </SongListWapper>
    </>
  );
});

export default Index;