import styled from "styled-components";
import back from '@/assets/banner_left.png'
import discShow from '@/assets/discShow.png'
import next from '@/assets/next.png'
import pause from '@/assets/pauseDetail.png'
import play from '@/assets/playDetail.png'
import random from '@/assets/Random.png'
import single from '@/assets/single.png'
import sequence from '@/assets/sequence.png'
import prv from '@/assets/pre.png'
export const PlayerBarDetailWapper=styled.div` 
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 9999999;
background: linear-gradient(to bottom, #2c5da8, #20191f);
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.back{
    width: 50px;
    height: 50px;
    background-image: url(${back});
    background-size: cover;
    background-repeat: no-repeat;
    margin: 35px 0px 0px 20px;
}
.cover {
    position: fixed;
    top: 40%;
    left: 25%;
    transform: translate(-50%, -50%);
    width: 350px;
    height: 350px;
}
.coverBox{
    width: 100%;
    height: 100%;
    background-image: url(${discShow});
    background-size: cover;
    border-radius: 50%;
    position: relative;
    img {
    width: 245px;
    height: 245px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    z-index: 999!important;
    will-change: transform;
    position: relative;
}
}
.coverStop {
      animation: spin 20s linear infinite;
      animation-play-state: paused;
    }
    .coverPlay {
      transition: transform 2s ease-in-out;
      transform: rotate(0deg);
      animation: spin 20s linear infinite;
    }

.songInfo{
  position: absolute;
  top: 110%;
  left: 10%;
  width: 260px;
  .songName{
    width: 100%;
    font-size: 25px;
    color: #fff;
    text-align: center;
  }
  .singerName{
    font-size: 18px;
    color: #898888;
    text-align: center;
    margin-top: 10px;
  }
}
`
export const PlayerBarsLyricWapper=styled.div`
height: 80vh;
position: fixed;
top: 5%;
left: 52%;
.lyric{
    height: 100%;
    overflow: scroll;
    position: relative;
    &::-webkit-scrollbar {
    display:none ;
  } 
  p{
    height: 50px;
    font-size: 18px;
    color: #898888;
  
  }
  .active{
    color: #fff;
    font-size: 25px;
    transition: all 0.5s ease;
  }
}
`   
export const PlayerBarDetailController=styled.div<{isplaying:string, playmode:number}>`
.Slider{
    width: 100%;
    position: fixed;
    bottom: 6%;
    margin-left: 5px;
}
.playerController{
  position: fixed;
  bottom: 1%;
  left: 42%;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button{
    border: none;
    outline: none;
    background-color: transparent;
}
.prv{
    width:28px;
    height:28px;
    background-image: url(${prv});
    background-size: cover;
}
.next{
    width:28px;
    height:28px;
    background-image: url(${next});
    background-size: cover;
    margin-left: 10px;
}
.play{
    width: 40px;
    height: 40px;
    background-image: url(${props=>props.isplaying=='true'?play:pause});
    background-size: cover;
}
.playMode{
    width:32px;
    height: 32px;
    background-size: cover;
    background-image: url(${props=>props.playmode==0? sequence :props=>props.playmode==1?random:single});
    margin-left: 20px;
}
}
.ant-slider-handle {
  background-color: #fc3d49; 
  border-color: #fc3d49; 
}

.ant-slider-rail {
  background-color: transparent;
}

.ant-slider-track {
  background-color: #fc3d49; 
}
:where(.css-dev-only-do-not-override-1hpnbz2).ant-slider:hover .ant-slider-track {
    background-color: #fc3d49;
    border: none;
}
:where(.css-dev-only-do-not-override-1hpnbz2).ant-slider .ant-slider-track {
    background-color: #fc3d49;
}
:where(.css-dev-only-do-not-override-1hpnbz2).ant-slider .ant-slider-handle:hover::after{
    background-color: #fc3d49;
    box-shadow: 0 0 0 4px #fc3d49;
}
.ant-slider css-dev-only-do-not-override-1hpnbz2 ant-slider-horizontal{
    background-color: #fc3d49;
}
.ant-slider-handle::after{
    background-color: #fc3d49;
    box-shadow: 0 0 0 2px #fc3d49;
    }
    .ant-slider-handle::after:hover{
    background-color: #fc3d49;
    box-shadow: 0 0 0 4px #fc3d49;
    }
    .ant-slider-handle::before:hover{
    background-color: #fc3d49;
    box-shadow: 0 0 0 4px #fc3d49;
    }
.ant-slider-handle::before{
    background-color: #fc3d49;
    border-radius: 50%;
    }
    .ant-slider-handle-dragging:hover{
    background-color: #fc3d49;
    box-shadow: 0 0 0 4px #fc3d49;
    }
 .ant-slider-handle:hover{
    background-color: #fc3d49;
    box-shadow: 0 0 0 2px #fc3d49;
 }   
:where(.css-dev-only-do-not-override-1hpnbz2).ant-slider .ant-slider-handle:hover::after, :where(.css-dev-only-do-not-override-1hpnbz2).ant-slider .ant-slider-handle:active::after, :where(.css-dev-only-do-not-override-1hpnbz2).ant-slider .ant-slider-handle:focus::after{
    background-color: #fc3d49;
    box-shadow: 0 0 0 4px #fc3d49;
    }
:where(.css-dev-only-do-not-override-1hpnbz2).ant-slider .ant-slider-handle::after {
    border: none;
    background-color: #fc3d49;
    box-shadow: 0 0 0 2px #fc3d49;
    }
`  