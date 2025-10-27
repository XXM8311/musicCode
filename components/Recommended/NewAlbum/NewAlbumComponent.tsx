import { appShallowEqual, useAppSelector } from '@/store';
import React, { ElementRef, FC, memo, ReactNode, useRef } from 'react';
import { Carousel } from 'antd';
import NewAlbumItem from '@/components/Recommended/NewAlbum/NewAlbumItem'
import {NewAlbumWapper} from '@/styles/view/Recommended/NewAlbum/NewAlbumWapper'
import Loading from '@/components/Loading';
interface PropsInterface {
  children?: ReactNode;
}
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
const Index: FC<PropsInterface> = memo(() => {
    const {newAlbumList}=useAppSelector((state)=>({
        newAlbumList:state.recommended.newAlbumList
    }),appShallowEqual)
    const bannerRef=useRef<ElementRef<typeof Carousel>>(null)
    const toNext=()=>{
      bannerRef.current?.next()
    }
    const toPrev=()=>{
      bannerRef.current?.prev()
    }
  return (
    <NewAlbumWapper>
    <div className='title'>
     <h3>新曲上架</h3>   
    </div>
   {
    newAlbumList.length>0? <div className='contentBox'>
    <Carousel   speed={1500} dots={false} ref={bannerRef}>
    {[0,1,2].map((item:number) =>{
      return (
       <div key={item} >
        <div className='contentItem'>
        {newAlbumList.slice(item*7,(item+1)*7).map((item:newAlbumListType)=>{
          return (
             <NewAlbumItem itemData={item} key={item.id}></NewAlbumItem>
          )
        })
        }
       </div>
       </div>
      )
    })}
    </Carousel>
    <button className='btnLeft' onClick={toPrev}></button>
    <button className='btnRight' onClick={toNext}></button>
    </div>
    :<Loading></Loading>
   }
    </NewAlbumWapper>
  );
});

export default Index;
