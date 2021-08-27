import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ProductPage from './pages/Product/ProductPage';
import ProductsPage from './pages/Products/ProductsPage';
import RegisterPage from './pages/Register/RegisterPage';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={ProductsPage}/>
                <Route path='/products/:id' exact component={ProductPage}/>
                <Route path='/register' exact component={RegisterPage}/>
                <Route path='/edit/:id' component={RegisterPage}/>
            </Switch>
        </BrowserRouter>
    )
}

