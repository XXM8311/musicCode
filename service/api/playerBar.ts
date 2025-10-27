import { http } from ".."
//歌曲url
export const getSongUrl=(id:number)=>{
return http.get({url:`/song/url/v1?id=${id}&level=jyeffect`})
}
//歌曲详情
export const getSongDetail=(ids:number)=>{
    return http.get({url:`/song/detail?ids=${ids}`})
}
//歌词详情
export const getLyri=(id:number)=>{
    return http.get({url:`/lyric?id=${id}`})
}
//新碟上架歌曲详情
export const getAlbumDetail=(id:number)=>{
    return http.get({url:`/album/album?id=${id}`})
}
//推荐歌单详情歌单列表
export const getPlayListDetail=(id:number)=>{
    return http.get({url:`/playlist/detail?id=${id}`})
}
//歌单评论
export const getComment=(id:number)=>{
    return http.get({url:`/comment/playlist?id=${id}&limit=30`})
}
//搜索
export const getSearchResult=(keywords:string)=>{
    return http.get({url:`/search?keywords=${keywords}&limit=20`})
}