import React from 'react';
import Icon from '@ant-design/icons';
import { Space } from 'antd';
import type { GetProps } from 'antd';
import {IconWapper} from '@/styles/icon/IconWapper'
type CustomIconComponentProps = GetProps<typeof Icon>;
const PlayAllSvg = () => (
<svg 
 viewBox="0 0 1024 1024" 
 version="1.1"
  xmlns="http://www.w3.org/2000/svg" 
  p-id="5331" 
  width="14" 
  height="14">
<path d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z" fill="#e6e6e6" p-id="5331"></path></svg>
);

const HeartIcon = (props: Partial<CustomIconComponentProps>) => (
    
    <Icon component={PlayAllSvg} {...props} className='recommended' />
  
  )

export  const PlayAll = () => (
    <Space>
      <HeartIcon style={{ color: 'hotpink' }} />
    </Space>
  );
  

