import React, { memo, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Sider, Content,Footer } = Layout;
import HeaderComponent from '@/components/HeaderComponent'
import MenuComponent from '@/components/MenuComponent'
import PlayerBar from '@/components/PlayerBar/PlayerBar'
import {fetchGetSongDetail} from '@/store/modules/playerSongDetail'
import { appShallowEqual, useAppDispatch, useAppSelector } from './store';
const App = memo(() => {
  const {isFullScreenDetailed}=useAppSelector((state)=>({
    isFullScreenDetailed:state.recommended.isFullScreenDetailed
  }),appShallowEqual)
  return (
    <>
     <Layout >
      <Sider style={{backgroundColor:'#f0f3f6'}} width='180px'>
     <MenuComponent></MenuComponent> 
      </Sider>

      <Layout>
      <Header style={{
  background: isFullScreenDetailed
    ? `linear-gradient(to bottom, transparent 300px, #c7def3 600px, #dde9f6, #fff 800px, #bcb7ff), linear-gradient(to right, #dde9f6 20%, #dde9f6, #fff)`
    : ` linear-gradient(to right,#f6edf6,#f7f9fc,#f6edf6,#f6edf6)`,
  height: '70px'
}}>
      <HeaderComponent></HeaderComponent>
      </Header>
      
      <Content style={{backgroundColor:'#f7f9fc',height:'100vh'}}>

     <Outlet></Outlet>

      </Content>
      </Layout>
    </Layout>
    <Layout>
      <Footer style={{width:'100vw',position:'fixed',bottom:'0%',zIndex:'999',backgroundColor:'#fafafa'}}>
        <PlayerBar></PlayerBar>
      </Footer>
    </Layout>
    </>
  )
})

export default App