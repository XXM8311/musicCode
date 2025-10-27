import styled from "styled-components";

export const SearchResultWapper = styled.div`
  width: 100%;
  height: 90vh;
  overflow: scroll;
  background: linear-gradient(to right, #f6edf6, #f7f9fc, #f7f9fc, #f6edf6),
    linear-gradient(to bottom, #f6edf6, #f7f9fc, #f7f9fc, #f6edf6);

  &::-webkit-scrollbar {
    display: none;
  }

  .SearchResulList {
    margin-top: 140px;
    width: 90%;
    margin: auto; /* 使列表居中 */
    &::-webkit-scrollbar {
      display: none;
    }
    .controller{
      display: flex;
        align-items: center;
        font-size: 16px;
        background-color: #fc3d49;
        padding: 5px;
        height: 35px;
        width: 88px;
        margin-top: 20px;
        border-radius: 8px;
        p{
            color: #fff;
            font-size: 15px;
            text-align: center;
        }
    }
    .SearchResulListTitle {
     margin-top: 20px;
      height: 50px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;

      .SearchResulListTitleItem1 {
        font-size: 18px;
        color: #000;
        width: 580px;
        margin-left: 10px;
      
      }
      .SearchResulListTitleItem2 {
        font-size: 20px;
        color: #000;
        flex: 33.3%;
        text-align: left;
      }
      .SearchResulListTitleItem3 {
        flex: 1; 
        font-size: 20px;
        color: #000;
        text-align: right; 
        padding-right: 10px; 
      }
    }
    .activeIndex{
      background-color: #fff;
      border-radius: 5px;
      padding: 10px;
    }
    .SearchResulListItem {
      margin-top: 20px;
      height: 50px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .SearchResulListItemIndex{
        font-size: 16px;
        color: #888;
        width: 30px;
        font-style: italic;
      }
      .SearchResulListItemName {
        font-size: 18px;
        color: #888;
        width: 580px;
        margin-left: 10px;
      }

      .SearchResulListItemSinger {
        width: 200px;
        color: #888; /* 统一字体颜色 */
      }

      .SearchResulListItemAlbum {
        flex: 1; 
        color: #888; 
        text-align: right; 
        padding-right: 10px; 
      }
    }
  }
`;