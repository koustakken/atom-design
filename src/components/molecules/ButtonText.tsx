import { ReactNode, FC } from "react";
import { Button } from "../atoms/Button";
import { Text } from "../atoms/Text";

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
