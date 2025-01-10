import { useReducer } from "react";

/*
 * NOTE
 * -- useReducer
 * 1- reducer -> functions -> handle state
 * 2- action -> Object -> dispatch to reducer (type, payload)
 * 3- store -> stores state
 */

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {count: state.count + action.payload}
    case "DECREMENT":
      return {count: state.count - action.payload}
    default:
      return state
  }
}

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer , {count: 0})
  
  const increment = () => {
    dispatch({type: "INCREMENT", payload: 1})
  }

  const decrement = () => {
    dispatch({type: "DECREMENT", payload: 1})
  }

  return (
    <div className="mx-auto mt-5 d-grid gap-3 w-50">
      <h5 className="alert alert-info text-center">آشنایی با هوک useReducer</h5>
      <button className="btn btn-primary" onClick={increment}>
        اضافه بنما 😉
      </button>
      <p className="alert alert-warning text-center">
        شمارش شما دوست عزیز برابر است با :{" "}
        <span className="badge rounded-pill bg-success">{state.count}</span>
      </p>
      <button className="btn btn-danger" onClick={decrement}>
        کم بنما 🤠
      </button>
    </div>
  );
};

export default UseReducerExample;