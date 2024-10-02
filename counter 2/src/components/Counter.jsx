import { Component } from "react";

class Counter extends Component {
    constructor() {
        super()

        this.state = {
            name: 'Adel'
        }

        // this.changeName = this.changeName.bind(this)
    }

    // changeName() {
    //     this.setState({name: 'Ali'})
    // }

    changeName = () => {
        this.setState({name: 'Ali'})
    }

    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <button onClick={this.changeName}>تغییر نام</button>
            </div>
        )
    }
}

export default Counter