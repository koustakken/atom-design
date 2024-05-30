import { ButtonText } from "@/components/molecules";
import { useCounter } from "@/hooks";

export const DecrementButton = () => {
  const { decrement } = useCounter();
  return <ButtonText onClick={decrement}>Decrement</ButtonText>;
};
