import { appShallowEqual, useAppDispatch, useAppSelector } from '@/store';
import { fetchGetSongDetail, fetchSearchResult, hangleChangePlayIng, hanglePlaySongIndex, hanglePlaySongList } from '@/store/modules/playerSongDetail';
import React, { FC, memo, ReactNode, useEffect, useState } from 'react';
import {SearchResultWapper} from '@/styles/Search/SearchResultWapper'
import { useLocation } from 'react-router-dom';
import {PlayAll} from '@/components/icon/PlayAll'
import { getSongDetail } from '@/service/api/playerBar';
import classNames from 'classnames';
interface PropsInterface {
  children?: ReactNode;
}
const Index: FC<PropsInterface> = memo((props) => {
  const routeData=useLocation()
  const dispatch=useAppDispatch()
  const [selectSearchListIndex,setSelectSearchListIndex]=useState(-1)
  useEffect(() => {
    if (routeData.state.keywords) {
      dispatch(fetchSearchResult(routeData.state.keywords));
    }
  }, [routeData.state.keywords]);
  const {searchResultList}=useAppSelector((state)=>({
    searchResultList:state.playerSongDetail.searchResultList
  }),appShallowEqual)
  //播放单曲
  const toPlay=(id:number)=>{
   dispatch(fetchGetSongDetail(id))
   dispatch(hangleChangePlayIng(true))
  }
  //播放全部
  const toPlayAll=()=>{
    const idList=[]
      for(let i=0;i<searchResultList.length;i++) {
        idList.push(searchResultList[i].id)
      }
    const promiseList:Promise<any>[]=[]
    let pLayList=[]
    for (const i of idList) {
      promiseList.push(getSongDetail(i))
    }
    Promise.all(promiseList).then((res)=>{
      pLayList= res.map((item)=>{
        return item.data.songs[0]
      })
     dispatch(hanglePlaySongList(pLayList))
     dispatch(hanglePlaySongIndex(0))
     dispatch(fetchGetSongDetail(pLayList[0].id))
     dispatch(hangleChangePlayIng(true))
    })
  }
  const hangleOver=(index:number)=>{
      setSelectSearchListIndex(index)
  }
  return (
    <SearchResultWapper>
      <div className='SearchResulList'>
      <div className='controller' onClick={toPlayAll}>
        <PlayAll></PlayAll><p>播放全部</p>
        </div>
        <div className='SearchResulListTitle'>
          {['歌曲','歌手','专辑'].map((item,index)=>{
            return (
                <div key={item} className={`SearchResulListTitleItem${index+1}`}>{item}</div>
            )
          })}
         </div>
      {searchResultList.map((item:any,index:number)=>{
        return (
          <div className={classNames('SearchResulListItem',{'activeIndex':selectSearchListIndex===index})}
           key={item.id} 
           onClick={()=>{toPlay(item.id)}}
           onMouseOver={()=>{hangleOver(index)}}
           onMouseOut={()=>{setSelectSearchListIndex(-1)}}
           >
            <div className='SearchResulListItemName'>
              <span className='SearchResulListItemIndex'>
              {String(index+1).padStart(2,'0')}-
              </span> 
              <span>
              {item.name}
              </span>
            </div>
            <div className='SearchResulListItemSinger'>
              {item.artists.map((item:any)=>{
                return(
                  item.name
                )
              }).join(' / ')}
            </div>
            <div className='SearchResulListItemAlbum'>
              《{item.album.name}》
            </div>
          </div>
        )
      })}
      </div>
    </SearchResultWapper>
  );
});

export default Index;
