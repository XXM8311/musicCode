import styled from "styled-components";

export const NewAlbumItemWapper=styled.div`
width: 100%;
.top{
    width: 95%;
    height: 145px;
    img{
        width: 100%;
        height: 140px;
        border-radius: 10px;
    }
}
.bottom{
    .name{
        font-size: 16px;
        font-weight: 600;
        color: #000;
    }
    .artist{
        font-size: 16px;
        color: #999;
    }
}
`