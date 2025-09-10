import { useState } from "react";
import "./App.css";

// import { increment, store, currentValue } from './redux'
import { store } from "./app/store";
import { increment, decrement, incrementByAmount } from "./fearures/counter/counterSlice";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          style={{ marginRight: "10px" }}
          onClick={() => store.dispatch(increment(2))}
        >
          +
        </button>
        <button onClick={() => store.dispatch(increment(2))}>
          count is {store.getState().value}
        </button>
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => store.dispatch(decrement(2))}
        >
          -
        </button>
        <div style={{ marginTop: "10px" }}>
          <button
            style={{ marginRight: "10px" }}
            onClick={() => store.dispatch(incrementByAmount(2))}
          >
            Add Amount
          </button>
          <input
            type="text"
            // value={}
            onChange={(e) => {}}
            style={{ width: "30px", height: "30px" }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
