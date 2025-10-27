import styled from "styled-components";

export const SongShowListWapper=styled.div` 
.songShowList{
    height: 50vh;
    width: 100%;
    overflow: scroll;
    &::-webkit-scrollbar {
    display:none ;
  } 
  .active{
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #eee;
    padding: 5px;
  }
  .title{
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: space-between;
    margin:0px 0px 10px 30px;
    color: #999;
    border-bottom: 1px solid #eee;
    .titleName{
        width: 190px;
       margin-left: 10px;
    }
    .songTime{
        margin-right: 100px;
        }
  }
  .songItem{
    display: flex;
    width: 100%;
    height: 50px;
    margin-bottom: 5px;
    justify-content: space-between;
    align-items: center;
    .songInfo{
        display: flex;
       align-items: center;
        width: 260px;
    .songIndex{
        color: #999;
        margin:0px 10px 0px 10px;
        width: 20px;
        .playIcon{
          width: 100%;
          height: 100%;
          img{
            width: 100%;
            height: 100%;
          }
        }
        }
     .songCover{
        width: 50px;
        height: 50px;
        img{
            width: 100%;
            height: 100%;
            border-radius: 5px;
        }
     }   
     .songName{
        font-size: 14px;
        color: #333;
        margin:0px 0px 10px 10px;
        width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
     }
     .songSinger{
        font-size: 12px;
        color: #999;
        margin-left: 10px;
        width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
     }
    }
    .songTime{
      margin-right: 70px;
     }
  }
}
`