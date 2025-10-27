import styled from "styled-components";

export const RecommendedDetailWapper=styled.div`
    height: 100vh;
    overflow: scroll;
    background:linear-gradient(to right,#f6edf6,#f7f9fc,#f7f9fc,#f6edf6),
	linear-gradient(to bottom,#f6edf6,#f7f9fc,#f7f9fc,#f6edf6);
    &::-webkit-scrollbar {
    display:none ;
  } 
.header{
    display: flex;
    margin: 10px 0px 0px 0px;
    padding: 5px;
    height: 230px;
    position: relative;
    .cover{   
    position: relative;
    display: flex;
    img{
    width: 200px;
    height: 200px;
    margin-left: 100px;
    border-radius: 15px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
    }
    .playCount{
        position :absolute ;
        left: 235px;
        top: 5px;
        display: flex;
        color: #fff;
    }
    }
    .introduce{
        margin-left:25px;
        .title{
            font-size: 20px;
            font-weight: 700;
            color: #000;
        }
        .info{
            font-size: 16px;
            color: #888;
            width: 1000px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3; 
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            word-wrap: break-word; 
        }
    }
    .controller{
        position: absolute;
        left: 330px;
        top: 140px;
        display: flex;
        align-items: center;
        font-size: 16px;
        background-color: #fc3d49;
        padding: 5px;
        height: 35px;
        border-radius: 8px;
        p{
            color: #fff;
            text-align: center;
        }
    }
}
.songNav{
    display: flex;
    height: 40px;
    width: 100px;
    justify-content: space-between;
    margin-left: 120px;
    font-size: 18px;
    .select{
        color: #fc3d49;
        border-bottom: 2px solid #fc3d49;
    }
}
   
`