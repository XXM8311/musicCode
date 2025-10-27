import { FC, memo, ReactNode } from 'react';

interface PropsInterface {
  children?: ReactNode;
}

const Index: FC<PropsInterface> = memo(() => {
  return <>最近播放</>;
});

export default Index;
