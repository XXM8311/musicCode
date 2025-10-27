import React, { FC, memo, ReactNode, useRef } from 'react';
import {ListPicksWapper} from '@/styles/view/Recommended/ListPicks/ListPicksWapper'
import ListPicksItem from '@/components/Recommended/ListPicks/listPicksItem'
import { appShallowEqual, useAppSelector } from '@/store';
interface PropsInterface {
  children?: ReactNode;
}
const Index: FC<PropsInterface> = memo(() => {
    const {listPicksList}=useAppSelector((state)=>({
        listPicksList:state.recommended.listPicksList
    }),appShallowEqual)    
    
    const ListPicksItemRef=useRef(null)
     
  return (
    <ListPicksWapper>
      <div className='title'>
        <h3>榜单精选</h3>
      </div>
     <div className='listPick'>
    {
      listPicksList.map((item:any)=>{
        return <ListPicksItem key={item.id} itemList={item}></ListPicksItem>
      })
    }
     </div>
    </ListPicksWapper>
  );
});

export default Index;
