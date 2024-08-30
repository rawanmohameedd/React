import React from 'react'
import useFetch from '../../Hooks/useFetch'
import "./Home.css"
import { ProductList } from '../productList/productList'

export const Home = () => {
  const { data: products } = useFetch("http://192.168.1.12:3000/products")

  return (
    <div className='homeContainer'>
      <ProductList products={products}/>
    </div>
  )
}
