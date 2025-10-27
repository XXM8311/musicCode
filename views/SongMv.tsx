import { FC, memo, ReactNode } from 'react';

interface PropsInterface {
  children?: ReactNode;
}

const Index: FC<PropsInterface> = memo(() => {
  return <>Mv</>;
});

export default Index;
