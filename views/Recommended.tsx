import { memo, useEffect, ReactNode, FC } from 'react';
import { useAppDispatch } from '@/store';
import { fetchRecommendedData } from '@/store/modules/recommended';
import BannerComponent from '@/components/Recommended/Banner/BannerComponent';
import HotRecommendation from '@/components/Recommended/HotRecommendation/HotRecommendation';
import NewAlbumComponent from '@/components/Recommended/NewAlbum/NewAlbumComponent';
import ListPacksComponent from '@/components/Recommended/ListPicks/ListPcksComponent';
import { RecommendedWapper } from '@/styles/view/Recommended/Recommended';
interface PropsInterface {
  children?: ReactNode;
}
const Index: FC<PropsInterface> = memo(() => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchRecommendedData());
  }, [dispatch]);

  return (
    <>
      <RecommendedWapper>
        <BannerComponent />
        <HotRecommendation />
        <NewAlbumComponent />
        <ListPacksComponent />
      </RecommendedWapper>
    </>
  );
});

export default Index;
