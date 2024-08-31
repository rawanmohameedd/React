import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./productList.css"
import reactLogo from '../../assets/react.svg'
import { AddtoCart } from '../AddtoCart/AddtoCart'

export const ProductList = ({products}) => {

    return (
        <div className='productContainer'>
            {products &&
                products.map((product) => {
                    let id = product.id
                    let image = product.image || reactLogo
                    return (
                        <Link to={`/product/${id}`} key={id}>
                            <div style={{ "flex": 1 }}>

                                <h2>{product.name}</h2>
                                <p> {product.description}</p>
                                <p>{product.price} EG</p>

                               <AddtoCart/>
                            </div>

                            <img src={image} />

                        </Link>
                    )
                })
            }
            </div>
    )
}
