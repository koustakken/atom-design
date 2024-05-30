import { Text } from "@/components/atoms";
import { useCounter } from "@/hooks";
import { DecrementButton } from "@/components/organisms/Counter";
import { IncrementButton } from "@/components/organisms/Counter";

export const CounterView = () => {
  const { index } = useCounter();

  return (
    <>
      <Text>{index}</Text>
      <IncrementButton />
      <DecrementButton />
    </>
  );
};
