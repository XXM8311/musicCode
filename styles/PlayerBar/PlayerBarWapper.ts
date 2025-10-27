import styled from "styled-components";
import prv from '@/assets/pre.png'
import next from '@/assets/next.png'
import pause from '@/assets/pause.png'
import play from '@/assets/play.png'
import random from '@/assets/Random.png'
import single from '@/assets/single.png'
import sequence from '@/assets/sequence.png'
import selectLyric from '@/assets/selectLyricl.png'
import lyric from '@/assets/lyricl.png'
import regulate from '@/assets/regulate.png'
import playList from '@/assets/playList.png'
export const PlayerBarWrapper=styled.div`
height: 4vh;
position: relative;
display: flex;
align-items: center;

.playDetail-enter {
  opacity: 0;
  transform: translateY(100%); /* 向上平移整个视口的高度 */
}

/* 进场动画 - 激活状态 */
.playDetail-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: all 1s ease;
}

/* 离场动画 - 开始状态 */
.playDetail-exit {
  opacity: 1;
}

/* 离场动画 - 激活状态 */
.playDetail-exit-active {
  transform: translateY(100%); /* 向下平移整个视口的高度 */
  transition: all 1s ease;
}

.playList-enter {
  opacity: 0;
  transform: translateX(100%); /* 向上平移整个视口的高度 */
}

/* 进场动画 - 激活状态 */
.playList-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: all 1s ease;
}

/* 离场动画 - 开始状态 */
.playList-exit {
  opacity: 1;
}

/* 离场动画 - 激活状态 */
.playList-exit-active {
  transform: translateX(100%); /* 向下平移整个视口的高度 */
  transition: all 1s ease;
}
`
export const PlayerBarCoverWapper=styled.div`
margin-left: 50px;
display: flex;
align-items: center;
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.cover {
    img {
      border: 1px solid #636a7a;
      width: 66px;
      height: 66px;
      object-fit: cover;
      background-color: transparent;
      border-radius: 50%;
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
    &:hover .coverPlay {
      animation-play-state: paused;
    }
  }
.songInfo{
  display: flex;
  align-items: center;
  margin-left: 10px;
  .songName{
    font-size: 18px;
    margin-left: 25px;
   max-width: 180px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.singer{
    font-size: 14px;
    color: #888;
    margin-left: 10px;
    width: 320px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;

}
.regulateController{
  position: absolute;
}
}

`

export const PlayerBarControllerWapper=styled.div<{ isplaying: string}>`
position: absolute;
left: 52%;
bottom: -5px;
transform: translateX(-50%);
button{
    border: none;
    outline: none;
    background-color: transparent;
}
.playerController{
    width: 260px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
  .prv{
    width: 27px;
    height:27px;
    background-image: url(${prv});
    background-size: cover;
  }
.next{
    width: 27px;
    height:27px;
    background-image: url(${next});
    background-size: cover;
    margin-left: 10px;
}
.play{
    width: 55px;
    height: 55px;
    background-image: url(${props=>props.isplaying=='true'?play:pause});
    background-size: cover;
}
  
}
`
export const RegulateControllerWapper=styled.div<{playmode:number,isshowlyricl:string} >`
 z-index:999;
  position: absolute;
  right: -28px; 
  bottom: -10px;
  .control{
  width: 120px;
  .controlIcon{
    display: flex;
  align-items: center;
  justify-content: space-between;
    .playMode{
    width:24px;
    height: 24px;
    background-size: cover;
    background-image: url(${props=>props.playmode==0? sequence :props=>props.playmode==1?random:single});
}
.lyricl{
   width:22px;
    height: 22px;
    background-size: cover;
    background-image: url(${props=>props.isshowlyricl=='true'?selectLyric:lyric});
}
.playList{
   width:22px;
    height: 22px;
    background-size: cover;
    background-image: url(${playList});
}
.regulate{
  position: relative;
    width:22px;
    height: 22px;
    background-size: cover;
    background-image: url(${regulate});
    .RegulateSlider{
    background-color: transparent;
    position: absolute;
    top: -110px;
    left: -8px;
    .ant-slider-handle {
  background-color: #fc3d49; 
  border-color: #fc3d49; 
}

.ant-slider-rail {
  background-color: #f0f0f0; 
}

.ant-slider-track {
  background-color: #fc3d49; 
}
:where(.css-dev-only-do-not-override-1hpnbz2).ant-slider:hover .ant-slider-track {
    background-color: #fc3d49;
    /* box-shadow: 0 0 0 4px #fc3d49; */
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
}
}
  }

  }

`
export const PlayerBarSliderWapper=styled.div`
display: flex;
align-items: center;
position: absolute;
left: 52%;
bottom: -3vh;
transform: translateX(-50%);
.startTime{
    margin-right: 10px;
}
.endTime{
    margin-left: 10px;
}
.ant-slider-handle {
  background-color: #fc3d49; 
  border-color: #fc3d49; 
}

.ant-slider-rail {
  background-color: #f0f0f0; 
}

.ant-slider-track {
  background-color: #fc3d49; 
}
:where(.css-dev-only-do-not-override-1hpnbz2).ant-slider:hover .ant-slider-track {
    background-color: #fc3d49;
    /* box-shadow: 0 0 0 4px #fc3d49; */
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