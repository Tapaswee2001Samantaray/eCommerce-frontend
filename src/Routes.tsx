import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';

const AllRouters: React.FC = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='products' element={<Products />} />
                <Route path='products/:id' element={<Product />} />
                <Route path='cart' element={<Cart />} />
            </Routes>
        </main>
    );
};

export default AllRouters;