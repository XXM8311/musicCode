import React, { FC, forwardRef, memo, ReactNode, Ref, useEffect, useRef} from 'react';
import {PlayerBarDetailWapper,PlayerBarDetailController,PlayerBarsLyricWapper} from '@/styles/PlayerBar/PlayerBarDetailWapper'
import disc from '@/assets/disc.png'
import { appShallowEqual, useAppSelector } from '@/store';
import { Slider } from 'antd';
import classNames from 'classnames';

interface PropsInterface {
  children?: ReactNode
  ref?: Ref<HTMLDivElement>
  hangelFullScreen:()=>void,
  isPlaying:boolean,
  playProgress:number,
  hangelPlay:()=>void,
  hangelChangeMusic:(isNext:boolean)=>void,
  hangelChangeMode:()=>void,
  handleChangeComplete:(value:number)=>void,
  hangdleChange:(value:number)=>void
}

const Index: FC<PropsInterface> = memo(forwardRef((props,ref) => {
  const {songDetail,lyricList,lyricIndex,isPlayIng,playMode}=useAppSelector((state)=>({
    songDetail:state.playerSongDetail.songDetail,
    lyricList:state.playerSongDetail.lyricList,
    lyricIndex:state.playerSongDetail.lyricIndex,
    isPlayIng:state.playerSongDetail.isPlayIng,
    playMode:state.playerSongDetail.playMode
  }),appShallowEqual)
  
 const lyricRef=useRef<HTMLDivElement>(null)
  const hangelChangeFullScreen=()=>{
    props.hangelFullScreen()
  }
  useEffect(()=>{
    lyricRef.current?.children[lyricIndex]?.scrollIntoView({
      behavior:'smooth',
      block: 'center', // 垂直方向滚动到元素的中心
      inline: 'center' 
    })

  },[lyricIndex])
  //播放暂停
  const hangelChangePlay=()=>{
    props.hangelPlay()
  }
  //上一首下一首
  const hangelSwitchSongs=(val:boolean)=>{
    if(val){
   props.hangelChangeMusic(true)

    }else{
      props.hangelChangeMusic(false)
    }
  }
  //播放模式
  const hangelChangeMode=()=>{
    props.hangelChangeMode()
  }
  //进度条点击
  const handleChangeComplete=(value:number)=>{
    props.handleChangeComplete(value)
  }
  //进度条拖拽
  const hangdleChange=(value:number)=>{
    props.hangdleChange(value)
  }
  return (
    <PlayerBarDetailWapper ref={ref} >
    <div className='back' onClick={hangelChangeFullScreen}></div>
    <div className='cover'>
      <div className={classNames('coverBox',{ 'coverPlay': isPlayIng, 'coverStop': !isPlayIng })}>
    <img src={songDetail[0]?.al?.picUrl ? songDetail[0]?.al?.picUrl + '?param=500x500' : disc} 
    />
    </div>
    <div className='songInfo'>
      <div className='songName'>{songDetail[0].name}</div>
      <div className='singerName'>{songDetail[0]?.ar?.map((item:any)=>{
        return (item.name)
      }).join('/')}</div>
    </div>
    </div>
 
<PlayerBarsLyricWapper>
<div className='lyric' ref={lyricRef}>
    {lyricList.map((item:any,index:number)=>{
      return (<p key={item.time} className={classNames({'active':index===lyricIndex})}>{item?.text}</p>)
    })}
    </div>
</PlayerBarsLyricWapper>
    <PlayerBarDetailController isplaying={isPlayIng.toString()} playmode={playMode}>
   <div className='Slider'>
   <Slider
   value={props.playProgress} 
   step={0.5} 
   defaultValue={0}
    style={{width:'98%'}} 
     tooltip={{ formatter:null }}
     onChangeComplete={handleChangeComplete}
     onChange={hangdleChange}
     />
   </div>
   <div className='playerController'>
    <button className='prv' onClick={()=>{hangelSwitchSongs(false)}}></button>
      <button className='play' onClick={hangelChangePlay}></button>
      <button className='next' onClick={()=>{hangelSwitchSongs(true)}}></button>
      <div className='playMode' onClick={hangelChangeMode}></div>
   </div>
     </PlayerBarDetailController>
    </PlayerBarDetailWapper>
  );
}))

export default Index;
