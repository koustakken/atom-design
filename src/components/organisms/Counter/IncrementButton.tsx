import { ButtonText } from "@/components/molecules";
import { useCounter } from "@/hooks";

export const IncrementButton = () => {
  const { increment } = useCounter();
  return <ButtonText onClick={increment}>Increment</ButtonText>;
};
