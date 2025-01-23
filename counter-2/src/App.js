// import { Component } from "react";

// class App extends Component {
//     state = {
//         count: 1,
//         name: 'Adel',
//         age: 15
//     }

//     changeState() {
//         this.setState({ count: 5 })
//         this.set
//     }

//     render() {
//         let { count, name, age } = this.state

//         return (
//             <div>
//                 <header>
//                     <h1>شمارنده ی من</h1>
//                 </header>

//                 <p>{count}</p>
//                 <p>{name}</p>
//                 <p>{age}</p>
//             </div>
//         )
//     }
// }

//---------------------------------------------------//
import { useState, useCallback } from 'react';
import Counter from './components/Counter.jsx'
// import './css/App.css'
import styles from './css/App.module.css'
import throttle from 'lodash.throttle'
                        
const App = () => {
    const [count, setCount] = useState(0)

    const logCount = (count) => {
        console.log("INCREMENT: " + count)
    }

    const throttleLog = useCallback(throttle(logCount, 2000), [])

    const increaseCount = () => {
        setCount(count + 1)
        throttleLog(count)
    }

    const decreaseCount = () => {
        if(count === 0) {
            return alert("بهتره دیگه منفی نباشیم")
        }
        setCount(count - 1)
    }

    const resetCount = () => {
        setCount(0)
    }

    const titleStyle = { color: 'aqua', border: '1px solid white', padding: '0 0 10px 0' }

    return (
        <div className={styles.App}>
            <header className={styles.Appheader}>
                <h1 style={titleStyle}>شمارنده ی من</h1>
            </header>
            <Counter inc={increaseCount} dec={decreaseCount} rest={resetCount} count={count} />
        </div>
    )
}



export default App