import {
  PropsWithChildren,
  FC,
  useState,
  createContext,
  useContext,
} from "react";

export const CounterContext = createContext({});

export const useCounter = () => useContext(CounterContext);

export const CounterProvider: FC<PropsWithChildren> = ({ children }) => {
  const [index, setIndex] = useState(0);
  const increment = () => setIndex(index + 1);
  const decrement = () => setIndex(index - 1);

  return (
    <CounterContext.Provider value={{ index, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};
