import React from 'react';
import Icon from '@ant-design/icons';
import { Space } from 'antd';
import type { GetProps } from 'antd';
import {IconWapper} from '@/styles/icon/IconWapper'
type CustomIconComponentProps = GetProps<typeof Icon>;
const SongMvSvg = () => (
<svg 
 viewBox="0 0 1024 1024" 
 version="1.1"
  xmlns="http://www.w3.org/2000/svg" 
  p-id="5389" 
  width="20" 
  height="20">
<path d="M1024 1024H486.4v-1.28C215.6032 1009.28 0 786.1248 0 512 0 229.2224 229.2224 0 512 0s512 229.2224 512 512c0 203.0848-118.5536 378.0352-289.9456 460.8H1024v51.2z m-51.2-512c0-242.3808-218.4192-460.8-460.8-460.8S51.2 269.6192 51.2 512s218.4192 460.8 460.8 460.8 460.8-218.4192 460.8-460.8zM384 768a128 128 0 1 1 256.0256 0.0256A128 128 0 0 1 384 768z m204.8 0a76.8 76.8 0 1 0-153.6 0 76.8 76.8 0 0 0 153.6 0z m179.2-384a128 128 0 1 1-0.0256 256.0256A128 128 0 0 1 768 384z m0 204.8a76.8 76.8 0 1 0 0-153.6 76.8 76.8 0 0 0 0 153.6z m-256-204.8a128 128 0 1 1 0.0256-256.0256A128 128 0 0 1 512 384z m0-204.8a76.8 76.8 0 1 0 0 153.6 76.8 76.8 0 0 0 0-153.6zM256 640a128 128 0 1 1 0.0256-256.0256A128 128 0 0 1 256 640z m0-204.8a76.8 76.8 0 1 0 0 153.6 76.8 76.8 0 0 0 0-153.6z" fill="#a4a2a2" p-id="5390"></path>
   </svg>
);

const HeartIcon = (props: Partial<CustomIconComponentProps>) => (
    <IconWapper>
    <Icon component={SongMvSvg} {...props} className='recommended' />
    </IconWapper>
  )

export  const SongMv = () => (
    <Space>
      <HeartIcon style={{ color: 'hotpink' }} />
    </Space>
  );
  
