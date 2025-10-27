import styled from "styled-components";
import back from '@/assets/back.png'
export const HeaderWrapper = styled.div<{isfull:string}>`
  position: fixed;
  z-index: 999;
  /* z-index: 99999; */
.back{
width: 25px;
height: 25px;
background: url(${back}) no-repeat;
background-size: cover;
}
.header {
  position: fixed;
  top: 0;
  left: 180px;
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 999;
  background: ${props=>props.isfull=='true'?`linear-gradient(to right,#f6edf6,#f7f9fc,#f7f9fc,#f6edf6),
	linear-gradient(to bottom,#f6edf6,#f7f9fc,#f7f9fc,#f6edf6)`
  :` linear-gradient(to right,#f6edf6,#f7f9fc,#f6edf6,#f6edf6)`};
  input{
    margin-left: 36px;
    border: 1px solid #ccc;
    border-radius: 10px;
    height: 35px;
    width: 240px;
    padding-left: 30px;
    outline: none;
    background:linear-gradient(to right,#dde7fb,#f4effa,#f7ecf5)
  }
  .avatar{
    position: fixed;
    right:150px;
  }
}
`