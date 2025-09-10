import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

// import { increment, store, currentValue } from './redux'
import {incrementAsync , increment, decrement, incrementByAmount } from "./fearures/counter/counterSlice";

function App() {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch() 

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          style={{ marginRight: "10px" }}
          onClick={() => dispatch(increment(2))}
        >
          +
        </button>
        <button onClick={() => dispatch(increment(2))}>
          count is {count}
        </button>
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => dispatch(decrement(2))}
        >
          -
        </button>
        <div style={{ marginTop: "10px" }}>
          <button
            style={{ marginRight: "10px" }}
            onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
          >
            Add Amount
          </button>
          <input
            type="text"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <button
            style={{ marginTop: "10px" }}
            onClick={() => dispatch(incrementAsync(Number(incrementAmount)))}
          >
            Add Amount
          </button>
      </div>
    </>
  );
}

export default App;
