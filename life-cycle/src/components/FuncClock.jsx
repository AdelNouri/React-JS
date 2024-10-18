import { useEffect } from "react";

const FuncClock = ({date, color}) => {
    useEffect(() => {
        console.log('FuncClock.jsx - Mount useEffect');
        return () => {
            console.log('FuncClock.jsx - Unmount useEffect');
        }
    }, [])

    useEffect(() => {
        console.log('FuncClock.jsx - Update useEffect');
    }, [color])


    const style = {
        color: color ? 'tomato' : 'black'
    }
    return (
        <>
            <p style={style}>ساعت در حال حاضر برابر : {date.toLocaleTimeString()}</p>
        </>
    )
}

export default FuncClock