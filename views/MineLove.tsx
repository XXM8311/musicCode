import { FC, memo, ReactNode } from 'react';

interface PropsInterface {
  children?: ReactNode;
}

const Index: FC<PropsInterface> = memo(() => {
  return <>我喜欢的音乐</>;
});

export default Index;
