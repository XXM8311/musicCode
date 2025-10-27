import { styled } from 'styled-components';
import leftBtn from '@/assets/banner_left.png'
import rightBtn from '@/assets/banner_right.png'
export const BannerWapper = styled.div`
background-size: cover;
display: flex;
margin-left: 3px;
justify-content: center;
border-radius: 15px;
width: 100%;
`
export const CarouselLeft=  styled.div`
width: 180px;
height:260px ;
`
export const CarouselRight=  styled.div`
width: 180px;
height:260px ;
`
export const CarouselContent=  styled.div`
z-index: 99;
width: 62%;
.bannerBox{
    width: 100%;
    height: 260px;
    margin: auto;
    position: relative;
   
}
.bannerItem{
    width:100%;
    height: 260px;
    img{
        width: 100%;
        height: 100%;
    }
}
.btnLeft{
    width: 50px;
    height: 50px;
    outline: none;
    border: none;
    background-image: url(${leftBtn});
    background-color: transparent;
    background-size: cover;
    position: absolute;
    top: 50%;
    left: -8%;
    transform: translate(0,-50%);
    cursor: pointer;
}
.btnRight{
    width: 50px;
    height: 50px;
    outline: none;
    border: none;
    background-color: transparent;
    background-image: url(${rightBtn});
    background-size: cover;
    position: absolute;
    top: 50%;
    right: -8%;
    transform: translate(0,-50%);
    cursor: pointer;
}
`