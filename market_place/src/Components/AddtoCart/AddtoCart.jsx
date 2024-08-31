import React, { useState } from 'react'
import './addtocart.css'
import { FaCartPlus } from 'react-icons/fa'

export const AddtoCart = () => {
    const Counter = () => {

        const [count, setCount] = useState(0)

        return (
            <div className='count-row'>
                <input type='button' value='+' className='count-button' onClick={() => { setCount(count + 1) }} />
                {count}
                <input type='button' value='-' className='count-button' onClick={() => { if (count > 0) setCount(count - 1) }} />
            </div>
        )
    }
    return (
        <div className='cart'>
            <Counter />
            <span > <FaCartPlus /> </span>
            <input type='button' value='Add to cart' />
        </div>
    )
}
