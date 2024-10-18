import {Component} from 'react'

/*
    NOTE Updateting LifeCtcle
    - static getDrivedStateFromProps(props, state)
    - shouldComponentUpdate(nextProps, nextState)
    - render()
    - getSnapshotBeforeUpdate(prevProps, prevState)
    - componentDidUpdate
*/

class Clock extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const {date, color} = this.props
        const style = {
            color: color ? 'tomato' : 'black'
        }
        return (
            <>
                <p style={style}>ساعت در حال حاضر برابر : {date.toLocaleTimeString()}</p>
            </>
        )
    }
}

export default Clock