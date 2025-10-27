import React, { FC, memo, ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {RecommendedDetailWapper} from '@/styles/view/Recommended/HotRecommendation/RecommendedDetailWapper'
import { PlayCount } from '@/components/icon/PlayCount';
import { formatPlayCount } from '@/utils/format';
import {PlayAll} from '@/components/icon/PlayAll'
import { getPlayListDetail } from '@/service/api/playerBar';
import SongShowList from '@/common/SongShowList'
import CommentList from '@/common/CommentList'
import classNames from 'classnames';
import { useAppDispatch } from '@/store';
import { fetchGetSongDetail, hangleChangePlayIng, hanglePlaySongIndex, hanglePlaySongList } from '@/store/modules/playerSongDetail';
interface PropsInterface {
  children?: ReactNode;
}

const Index: FC<PropsInterface> = memo(() => {
  const id=useLocation().state
  const [dataList,setDataList]=useState<any>()
  const [songList,setSongList]=useState<any>()
  const [isSongShow,setIsSongShow]=useState(true)
  useEffect(()=>{
    getPlayListDetail(id).then((res:any)=>{
      setDataList(res.data)
      setSongList(res.data.playlist.tracks)
    })
  },[id])
  //播放全部
  const dispatch=useAppDispatch()
  const toPlayAll=()=>{
    dispatch(hanglePlaySongList(songList))
    dispatch(fetchGetSongDetail(songList[0].id))
    dispatch(hanglePlaySongIndex(0))
    dispatch(hangleChangePlayIng(true))
  }
  return (
    <RecommendedDetailWapper>
      <div className='header'>
      <div className='cover'>
      <img src={dataList?.playlist?.coverImgUrl+'?param=500x500'} />
      <div className='playCount'>
            <PlayCount></PlayCount>
      <div className='countNum'>{formatPlayCount(dataList?.playlist?.playCount)}</div>
      </div>
      </div>
        <div className='introduce'>
          <p className='title'>{dataList?.playlist?.name}</p>
          <p className='info'>{dataList?.playlist?.description}</p>

        </div>
        <div className='controller' onClick={toPlayAll}>
        <PlayAll></PlayAll><p>播放全部</p>
        </div>
      </div>
      <div className='songNav'>
      <div className={classNames({'select':isSongShow})} onClick={()=>setIsSongShow(true)}>歌曲</div>
      <div className={classNames({'select':!isSongShow})} onClick={()=>setIsSongShow(false)}>评论</div>
      </div>
      <div className='content'>
        { isSongShow?songList &&<SongShowList songList={songList}></SongShowList>:<CommentList id={id}></CommentList>}
      </div>
    </RecommendedDetailWapper>
  );
});

export default Index;
