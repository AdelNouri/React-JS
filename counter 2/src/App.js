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

const App = () => {
    const [count, setCount] = useState(1)
    const [name, setName] = useState('Adel Nouri')
    const [age, setAge] = useState(15)

    const changeCount = () => {
        setCount(4)
    }

    return (
        <div>
            <header>
                <h1>شمارنده ی من</h1>
            </header>
            <p>{count}</p>
            <p>{name}</p>
            <p>{age}</p>

        </div>
    )
}

export default App