import React from 'react'
import './ProductsCard.css'


export default function ProductsCard(props ) {
    return (
        <li key={props.id} className="products-list-item">
            <div className="product-item-info">
                <h2>{props.title}</h2>
                <span className="product-info-description">{props.description}</span>
                <span className="product-info-category">{props.category}</span>
                <span className="product-info-price">R$ {props.price}</span>
            </div>
            <div className="product-item-image">
                <img src={props.imgUrl} alt={props.title} />
            </div>
        </li>
    )
}
