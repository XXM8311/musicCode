import React, { FC, memo, ReactNode, useEffect, useState } from 'react';
import SongListComponent from '@/components/Recommended/HotRecommendation/SongListComponent';
import { appShallowEqual, useAppSelector } from '@/store';
import { HotRecommendationWapper } from '@/styles/view/Recommended/HotRecommendation/HotRecommendation';
interface PropsInterface {
  children?: ReactNode;
}

const Index: FC<PropsInterface> = memo(() => {
  const { hotRecommendationList } = useAppSelector((state) => ({
    hotRecommendationList: state.recommended.hotRecommendationList,
  }), appShallowEqual);


  return (
    <HotRecommendationWapper>
      <div className='title'>
        <h3>推荐歌单</h3>
      </div>
      <SongListComponent songList={hotRecommendationList} />
    </HotRecommendationWapper>
  );
});

export default Index;