import styled from "styled-components";
import leftBtn from '@/assets/banner_left.png'
import rightBtn from '@/assets/banner_right.png'
export const NewAlbumWapper=styled.div`
.title{
    margin-left: 10px;
    font-size: 18px;
}
.contentBox{
    width: 98%;
    margin: 0px 10px 0px 10px;
    background-color: #f4f4f4;
    position: relative;
    border-radius: 5px;
    border: 1px solid #ddd;
}
.btnLeft{
    width: 25px;
    height:25px;
    outline: none;
    border: none;
    background-image: url(${leftBtn});
    background-color: transparent;
    background-size: cover;
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(0,-50%);
    cursor: pointer;
}
.btnRight{
    width: 25px;
    height: 25px;
    outline: none;
    border: none;
    background-color: transparent;
    background-image: url(${rightBtn});
    background-size: cover;
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translate(0,-50%);
    cursor: pointer;
}
.contentItem{
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 20px 25px 10px 35px;
    height: 240px;
}
`