import React from 'react'
import { DeleteOutline, Edit } from '@material-ui/icons'
import './ProductCard.css'
import { useHistory } from 'react-router-dom'

export default function ProductCard(props) {
    const router = useHistory();

    const deleteProduct = (id) => {
        let products = JSON.parse(localStorage.getItem('products')) || [];
        products = products.filter(product => product.id !== id);
      
        localStorage.setItem('products',JSON.stringify(products))
        router.push('/')
      }
    return (
        <div className="product-card">
            <img src={props.imgUrl} alt={props.title} />
            <div className="product-card-info">
               
                <h3 className="product-info-title">{props.title}</h3>
                <span className="product-info-description">{props.description}</span>
                <span className="product-info-price">R$ {props.price}</span>
            </div>

            <div className="product-card-actions">
                <Edit id='edit' onClick={() => router.push(`/edit/${props.id}`)}/>
               
                <DeleteOutline id='delete' onClick={() => deleteProduct(props.id)}/>
            </div>
        </div>
    )
}
