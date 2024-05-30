import { ButtonText } from "../molecules/ButtonText";
import { useCounter } from "./CounterProvider";

export const IncrementButton = () => {
  const { increment } = useCounter();
  return <ButtonText onClick={increment}>Increment</ButtonText>;
};
