import React from 'react'
import '../styles/Product.scss'
import {formatCurrency} from '../utils'

const Product = ({imageURL,productDescription}) => {
    return (
        <div className="product" style={{background:`url(${imageURL})`}}>
            <div className="product__description">
                {productDescription.name}
                {productDescription.price && <div className="product__price">{formatCurrency(productDescription.price)}</div>}
            </div>
        </div>
    )
}

export default Product 
