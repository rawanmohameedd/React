import React, {useState} from 'react'
import useFetch from '../../Hooks/useFetch'
import { Link } from 'react-router-dom'
import "./Home.css"
import reactLogo from '../../assets/react.svg'
import { FaCartPlus } from 'react-icons/fa'

export const Home = () => {
  const { data: products } = useFetch("http://192.168.1.12:3000/products")


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
    <div className='homeContainer'>
      {products &&
        products.map((product) => {
          let id = product.id
          let image = product.image || reactLogo
          return (
            <Link to={`/product/${id}`} key={id}>
              <div style={{ "flex": 1 }}>

                <h2>{product.name}</h2>
                <p> {product.description}</p>
                <p>{product.price}</p>

                <div className='cart'>
                  <Counter/>
                  <span> <FaCartPlus /> </span>
                  <input type='button' value='Add to cart' />
                </div>
              </div>

              <img src={image} />

            </Link>
          )
        })
      }
    </div>
  )
}
