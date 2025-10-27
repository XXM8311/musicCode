import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getSongDetail,getLyri, getSearchResult} from '@/service/api/playerBar'
import {formatLyric} from '@/utils/format'
import { FnStateType } from "../index";
//获取播放歌曲详情
export const fetchGetSongDetail=createAsyncThunk<void,number,{state:FnStateType}>('fetchGetSongDetail',(id:number,
    {dispatch,getState})=>{
    const platSongList=getState().playerSongDetail.playSongList
    const fildIndex=platSongList.findIndex(item=>item.id===id)  
    if(fildIndex===-1){
        getSongDetail(id).then((res:any)=>{
            const song=res.data.songs[0]
            const newPlaySongList=[...platSongList]
            newPlaySongList.unshift(song)
            dispatch(hangleSongDetail(res.data.songs))
            dispatch(hanglePlaySongList(newPlaySongList))
            dispatch(hanglePlaySongIndex(0))
            dispatch(hangleChangePlayIng(true))
        })
       getLyri(id).then((res:any)=>{
        dispatch(hangleLyricList(formatLyric(res.data.lrc.lyric)))
       })
    }else{
        const songData=platSongList[fildIndex]
        dispatch(hangleSongDetail([songData]))
        getLyri(id).then((res:any)=>{
            dispatch(hangleLyricList(formatLyric(res.data.lrc.lyric)))
        })
        dispatch(hanglePlaySongIndex(fildIndex))
    }
})
//上一首下一首切换
export const changeMusicAction=createAsyncThunk<void,boolean,{state:FnStateType}>('changeMusicAction',(isNext:boolean,{dispatch,getState})=>{
    const playerSongDetail=getState().playerSongDetail
    const playSongList=playerSongDetail.playSongList
    const playSongIndex=playerSongDetail.playSongIdex
    const playMode=playerSongDetail.playMode
    let newIndex=playSongIndex
    if(playMode===1){
      newIndex=Math.floor(Math.random()*playSongList.length)
    }else{
        newIndex=isNext?playSongIndex+1:playSongIndex-1
        if(newIndex>playSongList.length-1)newIndex=0
        if(newIndex<0)newIndex=playSongList.length-1
    }
    const songData=playSongList[newIndex]
    dispatch(hangleSongDetail([songData]))
    dispatch(hanglePlaySongIndex(newIndex))
    getLyri(songData.id).then((res:any)=>{
        dispatch(hangleLyricList(formatLyric(res.data.lrc.lyric)))

    })
})
export const fetchSearchResult=createAsyncThunk('fetchSearchResult',(keywords:string,{dispatch})=>{
    getSearchResult(keywords).then((res:any)=>{
        dispatch(hangelChangesearchResultList(res.data.result.songs))
    })
})
interface lyricListType{
    time:number,
    text:string
}
interface  initialStateType{
    songDetail:any,//当前播放的歌曲详情
    lyricList:lyricListType[],//当前歌曲歌词
    lyricIndex:number,//当前播放歌词索引
    playSongList:any[]//当前播放歌曲列表
    playSongIdex:number,//当前播放歌曲在列表索引
    playMode:number,//当前播放模式
    isPlayIng:boolean,//当前播放状态
    searchResultList:any[]//搜索结果
}
const   initialState:initialStateType={
    songDetail:[{
        "name": "",
        "id": 0,
        "ar": [

        ],
        "al": {
            "id": 0,
            "name": "",
            "picUrl": "",
        },
        "dt": 0
    }],
    lyricList:[],
    lyricIndex:0,
    playSongList:[],
    playSongIdex:-1,
    playMode:0,//0顺序，1随机，2单曲循环
    isPlayIng:false,//播放状态
    searchResultList:[]
}
const playerSongDetail=createSlice({
    name:"playerSongDetail",
    initialState,
    reducers:{
        hangleSongDetail(state,action){
            state.songDetail = action.payload
        },
        hangleLyricList(state,action){
            state.lyricList = action.payload
         },
         hangleLyricIndex(state,action){
            state.lyricIndex = action.payload
         },
         hanglePlaySongIndex(state,action){
            state.playSongIdex = action.payload
         },
         hanglePlaySongList(state,action){
            state.playSongList = action.payload
         },
         hangleChangeMode(state,action){
            state.playMode = action.payload
         },
         hangleChangePlayIng(state,action){
            state.isPlayIng = action.payload
         },
         hangelChangesearchResultList(state,action){
            state.searchResultList = action.payload
         }
    }
})
export const {
    hangleSongDetail,hangleLyricList,hangleLyricIndex,hanglePlaySongIndex,
    hanglePlaySongList,hangleChangeMode,hangleChangePlayIng,hangelChangesearchResultList
}=playerSongDetail.actions
export default playerSongDetail.reducer