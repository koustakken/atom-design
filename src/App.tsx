import "./App.css";
import { CounterProvider } from "./components/organisms/CounterProvider";
import { CounterView } from "./components/views/CounterView";

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
