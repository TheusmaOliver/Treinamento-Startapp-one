import React from 'react'
import { Container } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import ProductsCard from '../../components/ProductsCard/ProductsCard'
import './ProductsPage.css'
import { useHistory } from 'react-router-dom'

export default function ProductsPage() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const router = useHistory()
    return (
        <div className="products">
            <Container>
                <div className="products-title">
                    <h1>Lanches e Cia</h1>
                    <Add id="add" onClick={() => router.push('/register')}/>
                </div>
                

                <hr />

                <ul className="products-list">
                    {products.map((product, index)=>(
                        <ProductsCard
                            index={index}
                            id={product.id}
                            key={product.title}
                            imgUrl={product.imgUrl}
                            title={product.title}
                            price={product.price}
                            category={product.category}
                            description={product.description}
                        />
                    ))}
                </ul>
   
            </Container>
        </div>
    )
}
