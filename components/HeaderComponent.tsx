import React, { memo, useState,  } from 'react';
import {HeaderWrapper} from '@/styles/App/Header'
import { useNavigate } from 'react-router-dom';
import { appShallowEqual, useAppDispatch, useAppSelector } from '@/store';
import { changeIsFullScreenDetailed } from '@/store/modules/recommended';
const Index = memo(() => {
  const naviget=useNavigate()
  const dispatch=useAppDispatch()
  const hangelBack=()=>{
    naviget('/XxmMusic/Recommended')
    dispatch(changeIsFullScreenDetailed(false))
    setKeywords('')

  }
  const {isFullScreenDetailed}=useAppSelector((state)=>({
    isFullScreenDetailed:state.recommended.isFullScreenDetailed
  }),appShallowEqual)
  const [keywords,setKeywords]=useState('')
  const hangelKeyDown=(e:any)=>{
    if(e.keyCode==13){
      naviget('/XxmMusic/SearchResult',{state:{keywords}})
      dispatch(changeIsFullScreenDetailed(true))
    } 
  }
  return (
    <>
    <HeaderWrapper isfull={isFullScreenDetailed.toString()}>
       <div className='header'>
       { isFullScreenDetailed&&<div className='back' onClick={hangelBack}>
       </div>}
       <div>
            <input type="text" placeholder='请输入搜索的歌词' value={keywords}
             onChange={(e)=>setKeywords(e.target.value)} 
            onKeyDown={(e)=>{(hangelKeyDown(e))}}/>
        </div>
        <div className='avatar' >
          
        </div>
       </div>
    </HeaderWrapper>
    </>
  );
});

export default Index;
