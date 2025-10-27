import React from 'react';
import Icon from '@ant-design/icons';
import { Space } from 'antd';
import type { GetProps } from 'antd';
import {IconWapper} from '@/styles/icon/IconWapper'
type CustomIconComponentProps = GetProps<typeof Icon>;
const TopicdSvg = () => (
<svg 
 viewBox="0 0 1024 1024" 
 version="1.1"
  xmlns="http://www.w3.org/2000/svg" 
  p-id="8143" 
  width="21" 
  height="21">
<path d="M920.7 391.4L717.6 188.3c-9.1-9.1-21.3-14.2-34.2-14.2H335.3c-12.9 0-25.1 5-34.2 14.2L98 391.4c-9.1 9.1-14.2 21.3-14.2 34.2s5 25.1 14.2 34.2L475.1 837c9.1 9.1 21.3 14.2 34.2 14.2s25.1-5 34.2-14.2l377.2-377.2c9.1-9.1 14.2-21.3 14.2-34.2s-5.1-25.1-14.2-34.2z m-253.6 5.5h-62.8l-13 113.3H650c8.7 0 15.8 7.1 15.8 15.8 0 8.7-7 15.8-15.8 15.8h-62.3l-7.2 62.7c-0.9 8-7.7 14-15.6 14-0.6 0-1.2 0-1.8-0.1-8.6-1-14.9-8.8-13.9-17.5l6.8-59.1H442.8l-7.2 62.7c-0.9 8-7.7 14-15.6 14-0.6 0-1.2 0-1.8-0.1-8.6-1-14.9-8.8-13.9-17.5l6.8-59.1h-59.2c-8.7 0-15.8-7.1-15.8-15.8 0-8.7 7-15.8 15.8-15.8h62.8l13-113.3H369c-8.7 0-15.8-7.1-15.8-15.8 0-8.7 7-15.8 15.8-15.8h62.3l7.2-62.7c1-8.6 8.8-14.8 17.5-13.9 8.7 1 14.9 8.8 13.9 17.5l-6.8 59.1h113.1l7.2-62.7c1-8.6 8.8-14.8 17.5-13.9 8.6 1 14.9 8.8 13.9 17.5l-6.8 59.1h59.2c8.7 0 15.8 7.1 15.8 15.8-0.1 8.8-7.1 15.8-15.9 15.8z" p-id="8144" fill="#a4a2a2"></path><path d="M446.5 510.2h113.1l13-113.3H459.5z" p-id="8145" fill="#a4a2a2"></path>
</svg>
);

const HeartIcon = (props: Partial<CustomIconComponentProps>) => (
    <IconWapper>
    <Icon component={TopicdSvg} {...props} className='recommended' />
    </IconWapper>
  )

export  const Topicd = () => (
    <Space>
      <HeartIcon style={{ color: 'hotpink' }} />
    </Space>
  );
  

