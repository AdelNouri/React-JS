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
import { useState } from 'react';
import Counter from './components/Counter.jsx'

const App = () => {
    const [count, setCount] = useState(1)
    const [name, setName] = useState('Adel Nouri')
    const [age, setAge] = useState(15)

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        setCount(count - 1)
    }

    const resetCount = () => {
        setCount(0)
    }

    return (
        <div>
            <header>
                <h1>شمارنده ی من</h1>
            </header>
            <Counter/>
        </div>
    )
}

export default App