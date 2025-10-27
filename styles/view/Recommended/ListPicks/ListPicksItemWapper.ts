import styled from "styled-components";

export const ListPicksItemWapper=styled.div`
    flex: 40%;
    margin: 5px 10px 10px 10px;
    .listPickItem{
    position: relative;
    height: 160px;
    width: 90%;
    background-color: #ffffff;
    border-radius: 10px;
    border: 1px solid #e1e1e1;
    box-shadow: 0px 0px 10px 5px #e1e1e1;
    .title{
        font-size: 20px;
        font-weight: bold;
        padding: 10px 0px 0px 15px;
    }
    .content{
    display: flex;
    width: 100%;
    justify-content: start;
    align-items: center;
   .cover{
    width: 100px;
    height: 100px;
    position: relative;
    border-radius: 10px;
    border:1px solid #e1e1e1;
    margin: 10px 0px 0px 20px;
    .coverImg1 {
    position:absolute ;
    top: 0;
    z-index: 30;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    }

    .coverImg2 {
    position:absolute ;
    top: 20%; 
    left :20% ;
    z-index:20;
    width: 90%;
    height: 80%;
    border-radius: 10px;
    }

    .coverImg3 {
    position:absolute ;
    top: 30%; 
    left :30% ;
    z-index:10;
    width: 90%;
    height: 70%;
    border-radius: 10px;
    }
   }
   .tracksList{
    margin-left: 120px;
    font-size: 17px;
    padding-top: 5px;
    .tracksListInfo{
        margin-top: 8px;
        width: 280px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
     .singSinger{
        color: #888;
    }
    }

   }
}
.selectIcon{
    width: 40px;
    height: 40px;
    position: absolute;
    top: 80px;
    left: 45px;
    z-index: 999;
    img{
        width: 100%;
        height: 100%;

    }
}
}
`