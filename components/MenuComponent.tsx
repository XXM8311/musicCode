import React, { memo } from 'react';
import { MenuWrapper } from '@/styles/App/Menu';
import type { MenuProps } from 'antd';
import {Recommended} from '@/components/icon/Recommended'
import {Winnow} from '@/components/icon/Winnow'
import {Roamd} from '@/components/icon/Roam' 
import {Topicd} from '@/components/icon/Topic'
import {SongMv} from '@/components/icon/SongMv'
import {MineLove} from '@/components/icon/MineLove'
import {RecentlyPlayed} from '@/components/icon/RecentlyPlayed'
import { Message } from '@/components/icon/Message';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import logo from '@/assets/logo.png'
type MenuItem = Required<MenuProps>['items'][number];
const mainItems: MenuItem[] = [
  {
    key: 'Recommended',
    label: '推荐',
    icon: <Recommended />,
  },
  {
    key: 'Winnow',
    label: '精选',
    icon: <Winnow />,
  },
  {
    key: 'Roam',
    label: '漫游',
    icon: <Roamd />,
  },
    {
      key: 'Topic',
      label: '话题',
      icon: <Topicd />,
    },
  {
    key: 'SongMv',
    label: '歌曲MV',
    icon: <SongMv />,
  },
  {
    key: 'MineLove',
    label: '我喜欢的音乐',
    icon: <MineLove />,
  },
  {
    key: 'RecentlyPlayed',
    label: '最近播放',
    icon: <RecentlyPlayed />,
  },
  {
    key: 'Message',
    label: '通知与私信',
    icon: <Message />,
  }
]
const Index = memo(() => {
  const navigate = useNavigate();
  const handleMenuSelect: MenuProps['onSelect'] = (e) => {
    switch (e.key) {
      case 'Recommended':
        navigate('/XxmMusic/recommended')
        break
      case 'Winnow':
        navigate('/XxmMusic/winnow')
        break
      case 'Roam':
        navigate('/XxmMusic/roam')
        break
      case 'Topic':
        navigate('/XxmMusic/topic')
        break
      case 'SongMv':
        navigate('/XxmMusic/songMv')
        break
      case 'MineLove':
        navigate('/XxmMusic/mineLove')
        break
      case 'RecentlyPlayed':
        navigate('/XxmMusic/recentlyPlayed')
        break
      case 'MyCollection':
        navigate('/XxmMusic/myCollection')
        break
      case 'Message':
        navigate('/XxmMusic/message')
        break
      default:
      navigate('/')
    }
  };
  return (
    <>
    <MenuWrapper>
    <div className='menu'>
    <div className='logo'>
    <img src={logo} />
    <div>咸虾米音乐</div>
    </div>
    <Menu
    className='menuMain'
    defaultSelectedKeys={['Recommended']}
    mode="inline"
    items={mainItems}
    onSelect={handleMenuSelect}
    />
    <hr className='partingLine' />

    </div>
     </MenuWrapper>
    </>
  );
});

export default Index;
