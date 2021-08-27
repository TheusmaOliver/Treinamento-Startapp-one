import React from 'react'
import { useHistory } from 'react-router-dom'
import './ProductsCard.css'


export default function ProductsCard(props ) {
    const router = useHistory();
    return (
        <li 
            key={props.id} 
            className="products-list-item"
            onClick={() => router.push(`/products/${props.id}`)}
        >
            <div className="products-item-info">
                <h2>{props.title}</h2>
                <span className="products-info-description">{props.description}</span>
                <span className="products-info-category">{props.category}</span>
                <span className="products-info-price">R$ {props.price}</span>
            </div>
            <div className="products-item-image">
                <img src={`${props.imgUrl}`} alt={props.title} />
            </div>
        </li>
    )
}
