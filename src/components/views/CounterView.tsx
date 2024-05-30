import { Text } from "../atoms/Text";
import { useCounter } from "../organisms/CounterProvider";
import { DecrementButton } from "../organisms/DecrementButton";
import { IncrementButton } from "../organisms/IncrementButton";

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
