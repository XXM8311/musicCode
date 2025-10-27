import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import App from '@/App';
import Loading from '@/components/Loading';
const Recommended = lazy(() => import('@/views/Recommended'));
const Winnow = lazy(() => import('@/views/Winnow'));
const Roam = lazy(() => import('@/views/Roam'));
const Topic = lazy(() => import('@/views/Topic'));
const SongMv = lazy(() => import('@/views/SongMv'));
const MineLove = lazy(() => import('@/views/MineLove'));
const RecentlyPlayed = lazy(() => import('@/views/RecentlyPlayed'));
const MyCollection = lazy(() => import('@/views/MyCollection'));
const Message = lazy(() => import('@/views/Message'));
const RecommendedDetails = lazy(
  () => import('@/components/Recommended/HotRecommendation/RecommendedDetails')
);
const SearchResult = lazy(() => import('@/components/search/SearchResult'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/XxmMusic/recommended" replace />
  },
  {
    path: '/XxmMusic',
    element: <App />,
    children: [
      {
        index: true,
        path: 'recommended',
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Recommended />
          </Suspense>
        )
      },
      {
        path: 'winnow',
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Winnow />
          </Suspense>
        )
      },
      {
        path: 'roam',
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Roam />
          </Suspense>
        )
      },
      {
        path: 'topic',
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Topic />
          </Suspense>
        )
      },
      {
        path: 'songMv',
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <SongMv />
          </Suspense>
        )
      },
      {
        path: 'mineLove',
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <MineLove />
          </Suspense>
        )
      },
      {
        path: 'recentlyPlayed',
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <RecentlyPlayed />
          </Suspense>
        )
      },
      {
        path: 'myCollection',
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <MyCollection />
          </Suspense>
        )
      },
      {
        path: 'message',
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Message />
          </Suspense>
        )
      },
      {
        path: 'RecommendedDetails',
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <RecommendedDetails />
          </Suspense>
        )
      },
      {
        path: 'SearchResult',
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <SearchResult />
          </Suspense>
        )
      }
    ]
  }
]);

export default router;
