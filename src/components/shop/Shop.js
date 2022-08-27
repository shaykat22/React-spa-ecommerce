import React from 'react';
import { useEffect } from 'react';

import { useState } from 'react';
import Cart from '../Cart/cart';
import Product from '../product/product';
import './shop.css'
const Shop = () => {
    const [products, setProducts]=useState([])
    const [cart, setCart]=useState([])

    useEffect(()=> {
    fetch('products.json')
    .then(res=> res.json())
    .then(data=> setProducts(data));
     },[] )

     const handleCartAdd=(product)=>{
        console.log(product);
        const newCart =[...cart, product]
        setCart(newCart)
     }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleCartAdd={handleCartAdd}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;