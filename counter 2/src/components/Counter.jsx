// import { Component } from "react";

// class Counter extends Component {
//     constructor() {
//         super()

//         this.state = {
//             name: 'Adel'
//         }

//         // this.changeName = this.changeName.bind(this)
//     }

//     // changeName() {
//     //     this.setState({name: 'Ali'})
//     // }

//     changeName = () => {
//         this.setState({name: 'Ali'})
//     }

//     render() {
//         return (
//             <div>
//                 <p>{this.state.name}</p>
//                 <button onClick={this.changeName}>تغییر نام</button>
//             </div>
//         )
//     }
// }

// export default Counter

//----------------------------------------------------------------//
import PropTypes from 'prop-types';

const Counter = ({inc, dec, rest, count}) => {
    return (
        <div>
            <h1 style={{color: count === 0 ? 'red' : 'teal'}}>{count}</h1>

            <button style={{backgroundColor: count === 0 ? 'red' : 'teal', padding: '16px 18px 16px 18px'}} onClick={dec} disabled={count === 0}>-</button>
            <button onClick={inc}>+</button>
            <br />
            <button onClick={rest}>reset</button>
        </div>
    )
}

Counter.propTypes = {
    inc: PropTypes.func,
    dec: PropTypes.func,
    rest: PropTypes.func,
    count: PropTypes.number
}

export default Counter