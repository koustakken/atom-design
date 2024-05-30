import { PropsWithChildren, FC, useState } from "react";
import { CounterContext } from "./CounterContext";

export const CounterProvider: FC<PropsWithChildren> = ({ children }) => {
  const [index, setIndex] = useState(0);
  const increment = () => setIndex((prev) => prev + 1);
  const decrement = () => setIndex((prev) => prev - 1);

  return (
    <CounterContext.Provider value={{ index, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};
