import { ButtonText } from "../../molecules/ButtonText";
import { useCounter } from "../../../hooks/useCounter";

export const IncrementButton = () => {
  const { increment } = useCounter();
  return <ButtonText onClick={increment}>Increment</ButtonText>;
};
