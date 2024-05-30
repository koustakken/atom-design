import "./App.css";
import { CounterProvider } from "@/components/organisms/Counter";
import { CounterView } from "@/components/organisms/Counter";

function App() {
  return (
    <>
      <CounterProvider>
        <CounterView />
      </CounterProvider>
    </>
  );
}

export default App;
