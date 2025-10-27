import { appShallowEqual, useAppSelector } from '@/store';
import { BannerWapper,CarouselLeft,CarouselRight,CarouselContent } from '@/styles/view/Recommended/Banner/BannerWapper';
import React, { ElementRef, FC, memo, ReactNode, useRef, useState } from 'react';
import { Carousel } from 'antd';
interface PropsInterface {
  children?: ReactNode;
}
export interface bannerListType{
  imageUrl:string,
  typeTitle:string,
  targetId:number
  id:number
}
const Index: FC<PropsInterface> = memo(() => {
  const [current,setCurrent]=useState(0)
    const {bannerList}=useAppSelector((state)=>({
        bannerList:state.recommended.bannerList  
    }),appShallowEqual)
    const bannerRef=useRef<ElementRef<typeof Carousel>>(null)
    const toNext=()=>{
      bannerRef.current?.next()
    }
    const toPrev=()=>{
      bannerRef.current?.prev()
    }
    const hangdleChange=(current:number)=>{
      setCurrent(current)
    }
    const selectBannerList=bannerList[current] as bannerListType
    let imgUrl:string=''
    if(selectBannerList){
      imgUrl=selectBannerList.imageUrl+'?imageView&blur=40x20'
    }
  return (
    <BannerWapper style={{background:`url(${imgUrl})`} }>
    <CarouselLeft>
    </CarouselLeft>
    <CarouselContent>
    <div className='bannerBox'>
  <Carousel  autoplay autoplaySpeed={4000} speed={1000}  fade dots dotPosition="bottom" infinite={true} ref={bannerRef}  afterChange={hangdleChange}>
    {bannerList.map((item:bannerListType) => (
      <div key={item.targetId} className='bannerItem'>
        <img src={item.imageUrl} alt={item.typeTitle}/>
      </div>
    ))}
  </Carousel>
  <button className='btnLeft' onClick={toPrev}></button>
  <button className='btnRight' onClick={toNext}></button>
  </div>
  </CarouselContent>
  <CarouselRight>
  </CarouselRight>
  </BannerWapper>
  );
});

export default Index;
