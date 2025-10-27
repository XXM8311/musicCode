import React, { FC, memo, ReactNode } from 'react';
import { Skeleton } from 'antd';
import {LoadingWapper} from '@/styles/icon/LoadingWapper'
const Loading= memo(() => {
  return (
    <LoadingWapper>
    <Skeleton active  paragraph />
    </LoadingWapper>
  );
});


export default Loading;
