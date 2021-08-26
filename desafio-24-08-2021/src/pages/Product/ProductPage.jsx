import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { store } from '../../data/products';
import { Container } from '@material-ui/core'
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductPage.css'
export default function ProductPage() {
    const router = useHistory()
    const { id } = useParams();
    const selectedProduct = store.products.find(
        (product) => product.id === parseInt(id)
    );
    return (
        <div className="product">
            <Container>
                <h2>{selectedProduct.category}</h2>
                <hr/>

                <ProductCard
                    id={selectedProduct.id}
                    imgUrl={selectedProduct.imgUrl}
                    title={selectedProduct.title}
                    price={selectedProduct.price}
                    category={selectedProduct.category}
                    description={selectedProduct.description}
                />
                
            </Container>
            <button className='btn' onClick={() => router.push('/')}>Voltar</button>
        </div>
    )
}
