// import { Component } from "react"

// class Counter extends Component {
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
            <p>شمارنده : {props.count}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Counter