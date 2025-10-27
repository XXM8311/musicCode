import {
  getBannerList,
  getHotRecommendationList,
  getNewAlbumList,
  getListPicks
} from '@/service/api/recommended';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export const fetchRecommendedData = createAsyncThunk(
  'recommended',
  (_, { dispatch }) => {
    getBannerList().then((res: any) => {
      dispatch(changeBannerAction(res.data));
    });
    getHotRecommendationList(8).then((res: any) => {
      dispatch(changeHotRecommendationList(res.data));
    });
    getNewAlbumList().then((res: any) => {
      const monthData = res.data.monthData.slice(0, 21);
      const weekData = res.data.weekData.slice(0, 21);
      if (monthData) {
        dispatch(changeNewAlbumList(monthData));
      } else {
        dispatch(changeNewAlbumList(weekData));
      }
    });
    const listId: number[] = [19723756, 3779629, 3778678, 2884035];
    const promiseList: Promise<any>[] = [];
    for (const i of listId) {
      promiseList.push(getListPicks(i));
    }
    Promise.all(promiseList).then((res) => {
      const listPicks = res.map((item) => item.data.playlist);
      dispatch(changeListPicks(listPicks));
    });
  }
);

const recommendedSlice = createSlice({
  name: 'recommended',
  initialState: {
    bannerList: [],
    hotRecommendationList: [],
    newAlbumList: [],
    listPicksList: [],
    isFullScreenDetailed: false
  },
  reducers: {
    changeBannerAction(state, action) {
      state.bannerList = action.payload.banners;
    },
    changeHotRecommendationList(state, action) {
      state.hotRecommendationList = action.payload.result;
    },
    changeNewAlbumList(state, action) {
      state.newAlbumList = action.payload;
    },
    changeListPicks(state, action) {
      state.listPicksList = action.payload;
    },
    changeIsFullScreenDetailed(state, action) {
      state.isFullScreenDetailed = action.payload;
    }
  }
});
export const {
  changeBannerAction,
  changeHotRecommendationList,
  changeNewAlbumList,
  changeListPicks,
  changeIsFullScreenDetailed
} = recommendedSlice.actions;
export default recommendedSlice.reducer;
