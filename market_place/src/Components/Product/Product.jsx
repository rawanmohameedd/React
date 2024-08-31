import React, { useEffect, useState } from 'react';
import './product.css';
import { useParams } from 'react-router-dom';
import reactlogo from '../../assets/react.svg';
import { AddtoCart } from '../AddtoCart/AddtoCart';
import { server } from '../../server';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';

export const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        fetch(`${server}/products/${id}`)
            .then(res => {
                if (!res.ok) throw new Error(res.status);
                return res.json();
            })
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching product:', error));
    }, [id]);

    useEffect(() => {
        if (product) {
            fetch(`${server}/categories/${product.category_id}`)
                .then(res => {
                    if (!res.ok) throw new Error(res.status);
                    return res.json();
                })
                .then(data => setCategory(data))
                .catch(error => console.error('Error fetching category:', error));
        }
    }, [product]);

    const image = product?.image || reactlogo;

    return (
        <div className='productDetails'>
<Breadcrumbs category={category?.category} product={product?.name} />
        <div className="product-container">
            {product && (
                <>
                <div>
                <h2>{product.name}</h2>
                    <h2>{category?.category}</h2>
                    <h2>{product.price} EG</h2>
                    <h2> {product.description}</h2>
                    <AddtoCart/>
                </div>
                    
                    <img src={image} alt={product.name} />
                </>
            )}
            </div>
            </div>
    );
};
