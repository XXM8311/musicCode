import React from 'react';
import Icon from '@ant-design/icons';
import { Space } from 'antd';
import type { GetProps } from 'antd';
import {IconWapper} from '@/styles/icon/IconWapper'
type CustomIconComponentProps = GetProps<typeof Icon>;
const RecommendedSvg = () => (
<svg 
 viewBox="0 0 1024 1024" 
 version="1.1"
  xmlns="http://www.w3.org/2000/svg" 
  p-id="5678"
  width="22" 
  height="22">
<path d="M550.5024 165.9392l276.6336 197.9392c27.136 19.4048 43.264 50.688 43.264 83.968v319.1296c0 57.1392-46.4384 103.424-103.7312 103.424H625.152v-150.4256c0-62.2592-50.688-112.7936-113.2032-112.7936-62.464 0-113.152 50.5344-113.152 112.7936V870.4H257.28A103.5776 103.5776 0 0 1 153.6 766.976V447.8464c0-33.28 16.0768-64.5632 43.264-83.968L473.4976 165.888a66.2016 66.2016 0 0 1 77.0048 0z" fill="#a4a2a2"
 p-id="10113"></path>
   </svg>
);

const HeartIcon = (props: Partial<CustomIconComponentProps>) => (
    <IconWapper>
    <Icon component={RecommendedSvg} {...props} className='recommended' />
    </IconWapper>
  )

export  const Recommended = () => (
    <Space>
      <HeartIcon style={{ color: 'hotpink' }} />
    </Space>
  );
  

