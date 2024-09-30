// import { Component } from "react"

// class Counter extends Component {
//     static defaultProps = {
//         count: 25
//     }

//     render() {
//         return (
//             <div>
//                 <p>شمارنده : {this.props.count}</p>
//             </div>
//         )
//     }
// }


// export default Counter

//---------------------------------------------------//

const Counter = (props) => {
    console.log(props);
    return (
        <div>
            <p>شمارنده : {props.count || 25}</p>
            <p>{props.children}</p>
        </div>
    )
}

// Counter.defaultProps = {
//     count: 25
// }

export default Counter