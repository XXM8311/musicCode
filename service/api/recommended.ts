import {http} from '../index'
//轮播
export const getBannerList=()=>{
    return http.get({url:'/banner?type=0'})
} 
//推荐歌单
export const getHotRecommendationList=(limit=10)=>{
    return http.get({url:`/personalized?limit=${limit}`})
}
//新碟上架
export const getNewAlbumList=()=>{
    return http.get({url:'/top/album'})
}
//榜单精选
export const  getListPicks=(id:number)=>{
    return http.get({url:`/playlist/detail?id=${id}`})
}