import styled from "styled-components";

export const CommentListWapper=styled.div`
.noComment{
    width: 100%;
    height: 100%;
    text-align: center;
    margin-top: 150px;
}
.commentList{
    height: 55vh;
    width: 100%;
    overflow: scroll;
    &::-webkit-scrollbar {
    display:none ;
  } 
  .commentItem{
    display: flex;
    height: 100px;
    margin: 5px 0px 10px 50px;
    border-bottom: 1px solid #ccc;
    .userAvatar{
        width: 65px;
        height: 65px;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    .info{
        width: 1300px;
        .usrName{
            margin: 5px 0px 0px 10px;
            font-size: 16px;
            color: #6e8ac3;
            width: 280px;
        }
        .commentContent{
            margin: 5px 0px 0px 10px;
            font-size: 16px;
            color: #666;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3; 
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            word-wrap: break-word; 
        }
        .commentTime{
            margin: 5px 0px 0px 10px;
            font-size: 14px;
            color: #888;
        }
    }
  }
}
   
`