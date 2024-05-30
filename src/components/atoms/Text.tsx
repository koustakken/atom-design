import { FC, ReactNode } from "react";

interface TextProps {
  children: ReactNode;
}

export const Text: FC<TextProps> = ({ children }) => {
  return <span>{children}</span>;
};
