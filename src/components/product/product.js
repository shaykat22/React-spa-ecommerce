import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'

const Product = ({handleCartAdd, product}) => {
    //console.log(props);
    const { img, name, seller, price, ratings } = product
    return (
        <div className='product'>

            <img src={img} alt="" />
            <div className="product-info">
                <h3 className='p-name'>{name}</h3>
                <h4>price: ${price}</h4>
                <p> <small>{seller}</small></p>
                <p><small>Rating: {ratings} start</small> </p>
            </div>
            <div onClick={()=>handleCartAdd(product)} className="btn-cart">
                <p>Add to Cart <span><FontAwesomeIcon icon={faShoppingCart} /></span></p>
                
            </div>

        </div>
    );
};

export default Product;