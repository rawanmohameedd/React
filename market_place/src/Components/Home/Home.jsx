import React, { useState } from 'react'
import "./Home.css"
import { ProductList } from '../productList/productList'
import { server } from '../../server'
import Breadcrumb from '../BreadCrumbs/BreadCrumbs'

export const Home = () => {
  const [products , setProducts] = useState(null)
  fetch(server+"/products").then(res=>{
    if(!res.ok)
      throw new Error (res.status) 
    return res.json()
  }).then(data=>{
    setProducts(data)
  })

  return (
    <div className='homeContainer'>
      <Breadcrumb />

      <ProductList products={products}/>
    </div>
  )
}
