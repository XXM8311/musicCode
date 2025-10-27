import styled from "styled-components";

export const SongListWapper = styled.div`
width: 100%;
height: 150px;
display: flex;
justify-content: space-between;
.songList{
    width: 40%;
    margin: 6px;
    height: 100%;
    img{
        width: 100%;
        height: 100% ;
        object-fit: cover;
        border-radius: 10px;  
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6); /* 添加阴影效果 */
    
    }
    position: relative;
}
.playCount{
 position :absolute ;
    right: 5px;
    top: 0px;
    display: flex;
}
.countNum{
    color: #ffffff;
    font-size: 14px;
    padding-top: 2px;
}
.songName{
    width: 100%;
    text-align: center;
    font-size: 17px;
    margin-top: 8px;
    color: #283248; 
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word; 
}

`