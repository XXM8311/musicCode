import styled from "styled-components";
export const MenuWrapper = styled.div`
.menu{
    position: fixed;
    width: 180px;
    height: 100vh;
}
.logo{
    display: flex;
    margin-top: 20px;
    width: '100%';
    height: 40px;
    justify-content: center;
    align-items: center;
    color: '#283248';
    font-size: 16px;
    img{
        height: 35px;
    }
}
.ant-menu-item-selected{
    background-color: #fc3d49!important;
    color: white;
}
.menuMain{
    padding: 25px 0px 0px 5px;
    width:180px ;
    background-color:#f0f3f6 ;
    height: 255px;

}
.ant-menu-item{
    margin-top:10px; 
    height:35px ;
    width:90%;
}
.ant-menu-title-content{
    font-size: 14px;
}
.partingLine {
    border: 0;
    height: 1px; 
    background-color: #e4e8ec;
    width: 86%;
    margin: 0 auto; 
    }
img{
    border-radius: 50%;
    margin-right: 5px;
}
`