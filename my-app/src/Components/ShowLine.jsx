import { useState, useEffect } from 'react';

const ShowLine = ({lirycs, index}) => {
    const [lineNumber, setLineNumber] = useState(index)

    useEffect(() => {
        console.log('lfja')
        setLineNumber(index)
    }, [lineNumber])

    return (
        <>
            <h1>{lineNumber}</h1>
        </>
    )
}

export default ShowLine