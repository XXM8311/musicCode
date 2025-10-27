import styled from "styled-components";

export const PlayListWapper=styled.div` 
position: fixed;
bottom: 15vh;
right: 0;
z-index: 999999;
width: 400px;
height: 520px;
background-color: #fff;
overflow: scroll;
border-radius: 10px;
&::-webkit-scrollbar {
    display:none ;
  } 
.playList{
    .playListHeader{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin:10px 0px 20px 0px;
        border-bottom: 1px solid #eee;
        line-height: 40px;
        .playListTitle{
            font-size: 18px;
            font-weight: 700;
            margin: 50px 0 0 10px;
            position: relative;
        }
        .playListCount{
            position: absolute;
            left: 88px;
            top: 10;
            font-size: 12px;
            color: #999;
        }
        .playListBtn{
            margin-right: 20px;
        }
    }

    .playListContent{
        .playListItem{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 10px;
            .playListItemIcon{
                width: 56px;
                height: 56px;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 10px;
                }
                }

                .playListItemInfo{
                    flex: 1;
                    margin-left: 10px;
                    .playListItemName{
                        font-size: 14px;
                        font-weight: 700;
                        width: 220px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .playListItemAuthor{
                        font-size: 12px;
                        color: #999;
                        width: 220px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
                .playListItemTime{
                    margin-right: 20px;
                }
                .selectItemInfo{
                    color: #e33649 ;
                }
        }
        .selectItem{
           background-color: #eee;
           border-radius: 10px;
           padding: 5px;
        }
    }
}
`