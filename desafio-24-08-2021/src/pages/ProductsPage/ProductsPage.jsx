import React from 'react'
import { store } from '../../data/products'
import { Container } from '@material-ui/core'
import ProductsCard from '../../components/ProductsCard/ProductsCard'
import './ProductsPage.css'
export default function ProductsPage() {
    return (
        <div>
            <Container>
                <h1>{store.title}</h1>

                <hr />

                <ul className="products-list">
                    {store.products.map((product)=>(
                        <ProductsCard
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
