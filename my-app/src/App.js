import logo from "./logo.svg";
import Hello from "./hello.js";
import { useState } from "react";
import ShowLine from "./Components/ShowLine";
import "./App.css";

function App() {
  // const me = 'Adel'
  // const users = [
  //    {
  //     firstname: 'Mohammad Reza'
  //    },
  //    {
  //     firstname: 'Ali'
  //    },
  //    {
  //     firstname: 'Mufokoli'
  //    }
  // ]

  const users = [
    "Mohammad Reza",
    "Ali",
    "Mufokoli",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
  ];

  const [index, setIndex] = useState(0);

  setInterval(() => {
    setIndex(index + 1)
  }, 2000)

  // const showUser = () => {
  //   index += 1
  //   console.log(index)
  // }

  return (
    <div className="App">
      {/* <Hello/>
      {me? <h1>Hello {me}</h1> : <h1>Hello User</h1>}
      
      {users.map(user => (
        <h1>{user.firstname}</h1>
      ))}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <ShowLine lirycs={users} index={index}/>
    </div>
  );
}

export default App;
