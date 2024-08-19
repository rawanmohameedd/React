import React, { useState } from 'react'
import '../styling/counter.css'
const Counter = () => {

    const [count, setCount] = useState(0)


    return (
        <div className='container'>

            {count}
            <div className='count-row'>
                <input type='button' value='+' className='count-button' onClick={() => { setCount(count + 1) }} />
                <input type='button' value='-' className='count-button' onClick={() => { if (count > 0) setCount(count - 1) }} />
            </div>
            <input type='button' value='REST' className='count-button' onClick={() => { setCount(0) }} />

        </div>
    )
}

export default Counter