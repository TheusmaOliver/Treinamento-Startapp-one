import React from 'react'
import { DeleteOutline, Edit } from '@material-ui/icons'
import './ProductCard.css'
import { Link } from 'react-router-dom'

export default function ProductCard(props) {
    return (
        <div className="product-card">
            <img src={props.imgUrl} alt={props.title} />
            <div className="product-card-info">
               
                <h3 className="product-info-title">{props.title}</h3>
                <span className="product-info-description">{props.description}</span>
                <span className="product-info-price">R$ {props.price}</span>
            </div>

            <div className="product-card-actions">
               <Link to={`/register/${props.id}`}>
                <Edit id='edit'/>
               </Link> 
                <DeleteOutline id='delete'/>
            </div>
        </div>
    )
}
