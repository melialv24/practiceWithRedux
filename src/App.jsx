import { useDispatch, useSelector } from "react-redux";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { increment, decrement, incrementBy } from "./store/slices/counter";
import { useState } from "react";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          count is {counter}
        </button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementBy(amount))}>
          Increment by {amount}
        </button>
      </div>
      <div className="card">
        <input
          name="amountBy"
          value={amount}
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
