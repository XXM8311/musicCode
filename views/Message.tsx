import { FC, memo, ReactNode } from 'react';

interface PropsInterface {
  children?: ReactNode;
}

const Index: FC<PropsInterface> = memo(() => {
  return <>通知与收藏</>;
});

export default Index;
