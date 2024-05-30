import { ButtonText } from "../../molecules/ButtonText";
import { useCounter } from "../../../hooks/useCounter";

export const DecrementButton = () => {
  const { decrement } = useCounter();
  return <ButtonText onClick={decrement}>Decrement</ButtonText>;
};
