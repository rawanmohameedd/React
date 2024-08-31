import React, { useState, useEffect } from 'react'
import './ReleventProducts.css'
import { server } from '../../server'
import { AddtoCart } from '../AddtoCart/AddtoCart'
import reactlogo from '../../assets/react.svg';

export const ReleventProducts = ({ category_id }) => {
    const [category, setCategory] = useState(null)
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`${server}/categories/${category_id}`)
            .then(res => {
                if (!res.ok) throw new Error(res.status);
                return res.json();
            })
            .then(data => setCategory(data))

        fetch(`${server}/products`)
            .then(res => {
                if (!res.ok) throw new Error(res.status);
                return res.json();
            })
            .then(data => setProducts(data))
    }, [category_id]);

    const filteredProducts = products.filter(product => product.category_id === category_id)
    return (
        <div >

            {category && products &&
                <div>
                    <h2>{category.category}</h2>
                    <div className="relevant-products-container">
                    {filteredProducts.map(product => {
                        const image = product?.image || reactlogo;
                        console.log('first', product.category_id, category_id)
                        return (
                            <div className='categoriesContainer' key={product.id}>
                                <div>
                                    <h2>{product.name}</h2>
                                    <h2>{product.price} EG</h2>
                                    <AddtoCart />
                                </div>

                                <img src={image} alt={product.name} />
                            </div>

                        )
                    })}
                    </div>
                </div>
            }
        </div>

    )
}
