import React, { FC, memo, ReactNode, useEffect, useRef, useState } from 'react';
import {PlayerBarWrapper,PlayerBarControllerWapper,PlayerBarCoverWapper,PlayerBarSliderWapper,RegulateControllerWapper} from '@/styles/PlayerBar/PlayerBarWapper'
import disc from '@/assets/disc.png'
import { Slider,message } from 'antd';
import { useAppDispatch, useAppSelector } from '@/store';
import { appShallowEqual } from './../../store/index';
import {getSongUrl} from '@/service/api/playerBar'
import {formatTime} from '@/utils/format'
import {hangleChangePlayIng, hangleLyricIndex} from '@/store/modules/playerSongDetail'
import {hangleChangeMode,changeMusicAction} from '@/store/modules/playerSongDetail'
import classNames from 'classnames';
import PlayerBarDetail from '@/components/PlayerBar/PlayerBarDetail'
import {CSSTransition} from 'react-transition-group'
import PlayList from '@/common/PlayList'
interface PropsInterface {
  children?: ReactNode;
}
const Index: FC<PropsInterface> = memo(() => {
  const {playerSongDetail,lyricList,lyricIndex,playMode,playSongList}=useAppSelector((state)=>({
    playerSongDetail:state.playerSongDetail.songDetail,
    lyricList:state.playerSongDetail.lyricList,
    lyricIndex:state.playerSongDetail.lyricIndex,
    playMode:state.playerSongDetail.playMode,
    playSongList:state.playerSongDetail.playSongList
  }),appShallowEqual)
  const [messageApi, contextHolder] = message.useMessage();

  const [isPlaying,setIsPlaying]=useState(false)
  //播放进度条
  const [playProgress,setPlayProgress]=useState(0)
  //总时长
  const [totalTime,setTotalTime]=useState(0)
  //当前播放时间
  const [currentTime,SetCurrentTime]=useState(0)
  //是否拖拽
  const [isDrag,setIsDrag]=useState(false)
  //全屏播放
  const [isFullScreen,setIsFullScreen]=useState(false)
  //是否显示歌词
  const [isShowLyric,setIsShowLyric]=useState(true)
  //是否显示调节音量
  const [isRegulate,setIsRegulate]=useState(false)
  //音量
  const [volume,setVolume]=useState(100)
  ////是否显示播放列表
  const [isShowPlayList,setIsShowPlayList]=useState(false)
  const audioRef=useRef<HTMLAudioElement>(null)
  //播放详情
  const CSSTransitionRefForPlaydetail =useRef(null);
  //播放列表
  const CSSTransitionRefForPlayList =useRef(null);
  const dispatch=useAppDispatch()
  useEffect(()=>{
    const setAudioSrc = async () => {
      try {
        const songData:any = await getSongUrl(playerSongDetail[0].id)
        audioRef.current!.src = songData.data.data[0].url
        audioRef.current!.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          setIsPlaying(false);
        });
      } catch (error) {
        console.error('获取歌曲链接失败');
      }
    };
    setAudioSrc()
    setTotalTime(playerSongDetail[0].dt)
  },[playerSongDetail[0].id])


  //播放暂停
  const hangelPlay =()=>{
    if(playerSongDetail[0].id==0){
      messageApi.open({
        type:'error',
        content: '请选择播放的歌曲',
      });
      return false
    }
    if(isPlaying){
      audioRef.current!.pause()
      setIsPlaying(false)
      dispatch(hangleChangePlayIng(false))
    }else{
      audioRef.current!.play()
      setIsPlaying(true)
      dispatch(hangleChangePlayIng(true))
  }
}
//播放时间改变事件
const handleTimeChange=()=>{
  const currentTime=audioRef.current!.currentTime*1000
  if(!isDrag){
    const Progress=(currentTime/totalTime)*100
    setPlayProgress(Progress)
    SetCurrentTime(currentTime)
  }
  //歌词同步
  let index=lyricList.length-1
  for(let i=0;i<lyricList.length;i++){
    const lyricl=lyricList[i]
    if(lyricl.time>currentTime){
      index=i-1
   if(lyricList[index].text==''){
     index=i-2
   }
      break
    }
  }
 if(lyricIndex==index||index==-1){
    return false
  }
 dispatch(hangleLyricIndex(index))
 if(!isShowLyric){
  message.destroy('lyric');
 }
else if (!isFullScreen) {
  message.open({
    content: lyricList[index].text,
    key: 'lyric',
    duration: 0
  })
}else{
  message.destroy('lyric');
}
} 
//点击进度条事件
const handleChangeComplete=(val:number)=>{
  const currentTime=(val/100)*totalTime
  audioRef.current!.currentTime=currentTime/1000
  setPlayProgress(val)
  SetCurrentTime(currentTime)
  setIsDrag(false)
}
//拖拽进度条事件
const hangdleChange=(val:number)=>{
  setIsDrag(true)
  setPlayProgress(val)
}
//切换歌曲
const hangelChangeMusic=(isNext:boolean)=>{
  dispatch(changeMusicAction(isNext))
  dispatch(hangleChangePlayIng(true))
}
//切换播放模式
const hangelChangeMode=()=>{
  let playIngMode=playMode
  playIngMode++
  if(playIngMode>2){playIngMode=0}
  dispatch(hangleChangeMode(playIngMode))
}
//歌曲播放完毕
const hangleEnded=()=>{
  if(playSongList.length==1){
    audioRef.current!.pause()
    audioRef.current!.currentTime=0
      setIsPlaying(false)
      dispatch(hangleChangePlayIng(false))
  }
  if(playMode==2){
    audioRef.current!.currentTime=0
    audioRef.current!.play()
  }else{
    dispatch(changeMusicAction(true))
  }
}
//全屏播放
const hangelFullScreen=()=>{
  setIsFullScreen(!isFullScreen)
  message.destroy('lyric');
}
//显示隐藏歌词
const hangleShowLyric=()=>{
  setIsShowLyric(!isShowLyric)
  message.destroy('lyric');
}
//调节音量
const hangleVolume=()=>{
let index=0
  if(audioRef.current!.volume==0){
    audioRef.current!.volume=1
    setVolume(100)
    index=1
  }else{
    index=0
    setVolume(0)
    audioRef.current!.volume=0
  }
}
//显示隐藏音量调节器
const hangleMove=()=>{
  setIsRegulate(true)
}
const hangleLeave=()=>{
  setIsRegulate(false)
}
//拖拽调节音量
const hangdleChangeForVolume=(value:number)=>{
  audioRef.current!.volume=value/100
  setVolume(value)
}
//点击调节音量
const handleChangeCompleteForVolume=(value:number)=>{
  const volume=value/100
  audioRef.current!.volume=volume
  setVolume(value)
  setIsRegulate(false)
}
//显示隐藏播放列表
const hangleChangeShowPlayList=(state:number)=>{
  if(state==1){
    setIsShowPlayList(false)
  }else{
  setIsShowPlayList(!isShowPlayList)
  }
}
  return (
  <PlayerBarWrapper >
 <PlayerBarCoverWapper>
 {contextHolder} 
  <div className="cover" onClick={hangelFullScreen}>
  <div className={classNames({ 'coverPlay': isPlaying,'coverStop': !isPlaying})}>
      <img src={playerSongDetail[0]?.al?.picUrl ? playerSongDetail[0].al.picUrl + '?param=200x200' : disc} />
    </div>
  </div>
  <div className='songInfo' onClick={hangelFullScreen}>
  <div className="songName">{playerSongDetail[0].name !== '' ? playerSongDetail[0].name : ''}</div>
  <div className="singer">{playerSongDetail[0]?.ar?.length > 0 ? playerSongDetail[0].ar.map((item: any) => item.name).join('/') : ''}</div>
  </div>
</PlayerBarCoverWapper>
    <PlayerBarControllerWapper isplaying={isPlaying?'true':'false'}>
    <div className='playerController' >
     <button className='prv' onClick={()=>{hangelChangeMusic(false)}}></button>
      <button className='play' onClick={hangelPlay}></button>
      <button className='next'onClick={()=>{hangelChangeMusic(true)}}></button>
    </div>
    </PlayerBarControllerWapper>
    <div>
   <PlayerBarSliderWapper>
  <div className='startTime'>{formatTime(currentTime)}</div>
  <div>
    <audio src="" ref={audioRef} onTimeUpdate={handleTimeChange} onEnded={hangleEnded}></audio>
  <Slider
   value={playProgress} 
   step={0.5} 
   defaultValue={0}
    style={{height:'10px',width:'300px'}} 
     tooltip={{ formatter:null }}
     onChangeComplete={handleChangeComplete}
     onChange={hangdleChange}
     />
  </div>
  <div className='endTime'>{formatTime(totalTime)}</div>
   </PlayerBarSliderWapper>
    </div>  
    <RegulateControllerWapper playmode={playMode} isshowlyricl={isShowLyric?'true':'false'}>
    <div className='control'>
      <div className='controlIcon'>
      <div className='playMode' onClick={hangelChangeMode}></div>
      <div className='lyricl' onClick={hangleShowLyric}></div>
      <div className='regulate' onClick={hangleVolume} onMouseOver={hangleMove} >
     {
      isRegulate&& <div className='RegulateSlider' onMouseLeave={hangleLeave}>
      <Slider
     value={volume} 
     vertical={true}
      style={{height:'92px',width:'10px'}} 
       tooltip={{ formatter:null }}
       onChangeComplete={handleChangeCompleteForVolume}
       onChange={hangdleChangeForVolume}
       />
      </div>
    }
    </div>  
    <div className='playList' onClick={()=>{hangleChangeShowPlayList(0)}}>

    </div>
      </div>
    </div>
   
    </RegulateControllerWapper>
    <CSSTransition // 使用 CSSTransition 组件来包裹内容
          in={isFullScreen} // in 属性控制是否显示
          unmountOnExit={true} // 当不显示时卸载组件
          timeout={2000} // 设置动画时长
          classNames="playDetail" // 指定动画的类名
          appear // 使初次挂载也有动画效果
          nodeRef={CSSTransitionRefForPlaydetail}
        >
  {/* 详情页 */}
  <PlayerBarDetail 
   ref={CSSTransitionRefForPlaydetail}
    hangelFullScreen={hangelFullScreen}
    isPlaying={isPlaying}
    playProgress={playProgress}
    hangelPlay={hangelPlay}
    hangelChangeMusic={hangelChangeMusic}
    hangelChangeMode={hangelChangeMode}
    handleChangeComplete={handleChangeComplete}
    hangdleChange={hangdleChange}
   ></PlayerBarDetail>
   </CSSTransition>

   {/* 播放列表 */}
   <CSSTransition // 使用 CSSTransition 组件来包裹内容
          in={isShowPlayList} // in 属性控制是否显示
          unmountOnExit={true} // 当不显示时卸载组件
          timeout={2000} // 设置动画时长
          classNames="playList" // 指定动画的类名
          appear // 使初次挂载也有动画效果
          nodeRef={CSSTransitionRefForPlayList}
        >
  <PlayList 
   ref={CSSTransitionRefForPlayList}
   hangleChangeShowPlayList={()=>{hangleChangeShowPlayList(1)}} 
   ></PlayList>
   </CSSTransition>
    </PlayerBarWrapper>
  );
});

export default Index;
