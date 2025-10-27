import React from 'react';
import Icon from '@ant-design/icons';
import { Space } from 'antd';
import type { GetProps } from 'antd';
import {IconWapper} from '@/styles/icon/IconWapper'
type CustomIconComponentProps = GetProps<typeof Icon>;
const PlayCountSvg = () => (
<svg 
 viewBox="0 0 1024 1024" 
 version="1.1"
  xmlns="http://www.w3.org/2000/svg" 
p-id="8152"
  width="20" 
  height="20">
<path d="M905.4 535.3h-38.9v-36.6c0-11.8-9.6-21.4-21.4-21.4h-36.5c-3-74.8-33.6-144.6-86.8-197.9-15.5-15.5-32.5-29.1-50.5-40.7-1.2-4.5-4.1-8.5-8.5-11-45.8-26.5-98.1-40.5-151.2-40.5-53.2 0-105.5 14-151.2 40.5-4.4 2.5-7.3 6.6-8.5 11-18.1 11.5-35 25.1-50.5 40.7-53.2 53.2-83.8 123.1-86.8 197.9H179c-11.8 0-21.4 9.6-21.4 21.4v36.6h-38.9c-12.2 0-22.1 9.9-22.1 22.1v191.7c0 12.2 9.9 22.1 22.1 22.1h38.9v44.1c0 11.8 9.6 21.4 21.4 21.4h105.8c11.8 0 21.4-9.6 21.4-21.4V498.7c0-11.8-9.6-21.4-21.4-21.4H241c4.1-90.6 52.9-169.7 124.8-215.8 1.2 0.3 2.5 0.4 3.8 0.4 3.1 0 6.3-0.8 9.2-2.5 40.2-23.3 86.2-35.6 132.9-35.6s92.7 12.3 132.9 35.6c4.1 2.4 8.7 2.9 12.9 2 71.9 46.1 120.7 125.2 124.8 215.8h-42.9c-11.8 0-21.4 9.6-21.4 21.4v316.6c0 11.8 9.6 21.4 21.4 21.4h105.8c11.8 0 21.4-9.6 21.4-21.4v-44.1h38.9c12.2 0 22.1-9.9 22.1-22.1V557.4c-0.1-12.2-10-22.1-22.2-22.1zM157.5 744.8h-34.6v-183h34.6v183z m122.1-241v306.5H184V503.8h95.6zM840 810.3h-95.6V503.8H840v306.5z m61.1-65.5h-34.6v-183h34.6v183z" fill="#ffffff" p-id="8153"></path></svg>
);

const HeartIcon = (props: Partial<CustomIconComponentProps>) => (

    <Icon component={PlayCountSvg} {...props} className='recommended' />
 
  )

export  const PlayCount = () => (
    <Space>
      <HeartIcon style={{ color: 'hotpink' }} />
    </Space>
  );
  

