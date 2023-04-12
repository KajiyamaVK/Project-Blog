import { ReactNode } from "react";

export default interface Props{
  title: string;
  content: string;
  children: ReactNode;
  image: string;
}