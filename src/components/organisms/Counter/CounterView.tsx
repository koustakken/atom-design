import { Text } from "../../atoms/Text";
import { useCounter } from "../../../hooks/useCounter";
import { DecrementButton } from "../../organisms/Counter/DecrementButton";
import { IncrementButton } from "../../organisms/Counter/IncrementButton";

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
