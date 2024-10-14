import { Component } from "react";
import "./App.css";

// NOTE Mounting LifeCycle In Class Component

// Constructor
// static getDerivedStateFromProps(props, state)
// render ()
// componentDidMount

class App extends Component {
  constructor() {
    super();

    this.state = {date: new Date(), showClock: true, color: false};
  }

  tick() {
    this.setState({date: new Date()})
  }

  render() {
    return (
      <div className="App">
        <p>hello my friends</p>
        <p>ساعت در حال حاضر برابر : {this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }
}

export default App;
