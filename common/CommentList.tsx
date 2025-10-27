import { getComment } from '@/service/api/playerBar';
import React, { FC, memo, ReactNode, useEffect, useState } from 'react';
import {CommentListWapper} from '@/styles/PlayerBar/CommentListWapper'
interface PropsInterface {
  children?: ReactNode,
  id:number
}

const Index: FC<PropsInterface> = memo((props) => {
  const [commentList, setCommentList] = useState<any>([])
    console.log(props.id);
    useEffect(()=>{
      getComment(props.id).then((res:any)=>{
        console.log(res.data);
        setCommentList(res.data.comments)
      })
    },[])
  return (
    <CommentListWapper>
    <div className='commentList'>
    {
      commentList.length>0?   commentList.map((item:any)=>{
        return (
          <div className='commentItem' key={item.commentId}>
            <div className='userAvatar'>
              <img src={item.user.avatarUrl+'?param=100x100'}></img>
            </div>
          <div className='info'>
          <div className='usrName'>{item.user.nickname}</div>
          <div className='commentContent'>{item.content}</div>
          <div className='commentTime'>{item.timeStr}</div>
          </div>
          </div>
        )
      }):<div className='noComment'>暂无评论</div>
    }
    </div>
    </CommentListWapper>
  );
});

export default Index;
