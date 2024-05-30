import { ReactNode, FC } from "react";
import { Button } from "@/components/atoms";
import { Text } from "@/components/atoms";

interface ButtonTextProps {
  onClick: () => void;
  children: ReactNode;
}

export const ButtonText: FC<ButtonTextProps> = ({ onClick, children }) => {
  return (
    <Button onClick={onClick}>
      <Text>{children}</Text>
    </Button>
  );
};
