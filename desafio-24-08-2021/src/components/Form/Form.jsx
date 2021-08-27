import React,{ useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Container } from '@material-ui/core'
import './Form.css'

const initialValue={
    title:'',
    description:'',
    category:'',
    price:'',
    imgUrl:'',
}


export default function Form({id}) {
    const router = useHistory()
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const [values,setValues] = useState(initialValue);

    const loadProducts = () =>{
        const selectedProduct = products.find(
            (product) => parseInt(product.id) === parseInt(id)
        );
        setValues(selectedProduct);
    }
    useEffect(()=>{
        if(id){
            loadProducts();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])

    function onChange(ev) {
        const { name, value } = ev.target;
    
        setValues({ ...values, [name]: value });
    }

    const  randomId =  () => Math.round(Math.random()*1000)
   

    function onSubmit(ev){
        ev.preventDefault()
        products.push({
            id:randomId(),
            ...values,
        })
        localStorage.setItem('products',JSON.stringify(products))
        router.push('/')
    }

    return (
        <Container>
            {id
                ? <h1>Editar {values.title}</h1>
                : <h1>Cadastrar Produto</h1>
            }
            <hr/>
            <form onSubmit={onSubmit} className="form">
                <label htmlFor='name'>Nome:</label> 
                <input 
                    type="text" 
                    id='title'
                    name='title'
                    required
                    value={values.title}
                    onChange={onChange}    
                /> 
                <label htmlFor="description">Descrição:</label>
                <input 
                    type="text" 
                    id='description' 
                    name='description'
                    required
                    value={values.description}
                    onChange={onChange}    
                />
                <label htmlFor="category">Categoria:</label>
                <input 
                    type="text" 
                    id='category' 
                    name='category'
                    required
                    value={values.category}
                    onChange={onChange}
                />
                <label htmlFor="price">Preço:</label>
                <input 
                    type="text" 
                    id='price' 
                    name='price'
                    required
                    value={values.price}
                    onChange={onChange}
                />
                <label htmlFor="img">Url da imagem:</label>
                <input 
                    type="text" 
                    id='imgUrl'
                    name='imgUrl'
                    required
                    value={values.imgUrl}
                    onChange={onChange}   
                />

                <button type="submit">
                    {id
                        ? 'Editar'
                        : 'Salvar'
                    }
                </button>
            </form>
        </Container>
    )
}
