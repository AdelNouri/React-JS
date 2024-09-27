import logo from './logo.svg';
import Hello from './hello.js'
import './App.css';

function App() {
  const me = 'Adel'
  const users = [
     {
      firstname: 'Mohammad Reza'
     },
     {
      firstname: 'Ali'
     }, 
     {
      firstname: 'Mufokoli'
     }
  ]

  return (
    <div className="App">
      <Hello/>
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
      </header>
    </div>
  );
}

export default App;
