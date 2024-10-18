import { Component } from "react";
import "./App.css";

// import Clock from "./components/Clock";
import FuncClock from "./components/FuncClock";

// NOTE Mounting LifeCycle In Class Component

// Constructor
// static getDerivedStateFromProps(props, state)
// render ()
// componentDidMount

class App extends Component {
  constructor() {
    super();

    this.state = {date: new Date(), showClock: true, color: false};

    this.colorChange = this.colorChange.bind(this);
    this.clockChange = this.clockChange.bind(this);
  }

  tick() {
    this.setState({date: new Date()})
  }

  clockChange() {
    this.setState({showClock: !this.state.showClock});
  }

  colorChange() {
    this.setState({color: !this.state.color});
  }

  render() {
    const {date, showClock, color} = this.state;

    return (
      <div className="App">
        <p>hello my friends</p>
        {
          showClock ? <FuncClock date={date} color={color}/> : null 
        }
        <hr/>
        <button onClick={this.clockChange}>نمایش ساعت</button>
        <button onClick={this.colorChange}>تغییر رنگ</button>
      </div>
    );
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }
}

export default App;
