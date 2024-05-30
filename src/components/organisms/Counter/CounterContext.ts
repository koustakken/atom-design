import { createContext } from "react";

export interface CounterContextProps {
  index: number;
  increment: () => void;
  decrement: () => void;
}

export const CounterContext = createContext<CounterContextProps>({
  index: 0,
  increment: () => {},
  decrement: () => {},
});
