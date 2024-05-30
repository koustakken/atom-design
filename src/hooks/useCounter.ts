import { useContext } from "react";
import { CounterContextProps } from "../components/organisms/Counter/CounterContext";
import { CounterContext } from "../components/organisms/Counter/CounterContext";

export const useCounter = (): CounterContextProps => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }

  const { index, increment, decrement } = context;
  return {
    index,
    increment,
    decrement,
  };
};
