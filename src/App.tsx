import "./App.css";
import { CounterProvider } from "./components/organisms/Counter/CounterProvider";
import { CounterView } from "./components/organisms/Counter/CounterView";

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
