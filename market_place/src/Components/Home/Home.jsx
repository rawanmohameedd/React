import React from 'react'
import useFetch from '../../Hooks/useFetch'
import { Link } from 'react-router-dom'

export const Home = () => {
  const { data: products } = useFetch("http://localhost:3000/products")

  // const Categories = products.filter((product) => {

  // })

  return (
    <div>
      {products &&
        products.map((product) => {
          let id = product.id
          let category
          if (product.category != product.category - 1)
            category = product.category
          return (
            <Link to={`/product/${id}`} key={id}>
              <h2>{category}</h2>
            </Link>
          )
        })
      }
    </div>
  )
}
