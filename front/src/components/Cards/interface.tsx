import { ReactNode } from 'react';

export default interface Props {
  title: string;
  children: ReactNode;
  image: string;
  emphasysText?: string;
}
