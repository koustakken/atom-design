import { ButtonText } from "../molecules/ButtonText";
import { useCounter } from "./CounterProvider";

export const DecrementButton = () => {
  const { decrement } = useCounter();
  return <ButtonText onClick={decrement}>Decrement</ButtonText>;
};
