import React, { useEffect, useState } from 'react'
import '../styling/counter.css'
const Counter = () => {

    const [count, setCount] = useState(0)
    const [calaculations, setCalc] = useState(0)

    useEffect(() => {
        setCalc(count * 2)
        console.log(calaculations)
    })

    return (
        <div className='container'>

            {count}
            <p> calaculations: {calaculations}</p>
            <div className='count-row'>
                <input type='button' value='+' className='count-button' onClick={() => { setCount(count + 1) }} />
                <input type='button' value='-' className='count-button' onClick={() => { if (count > 0) setCount(count - 1) }} />
            </div>
            <input type='button' value='REST' className='count-button' onClick={() => { setCount(0) }} />

        </div>
    )
}

export default Counter