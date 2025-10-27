import { FC, memo, ReactNode } from 'react';

interface PropsInterface {
  children?: ReactNode;
}

const Index: FC<PropsInterface> = memo(() => {
  return <>话题</>;
});

export default Index;
