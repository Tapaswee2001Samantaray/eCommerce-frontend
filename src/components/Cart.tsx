import React from 'react';
import useStore from '../zustand/useStore';
import EmptyCart from './EmptyCart';
import CartItems from './CartItems';
import Buttons from './Buttons';

const Cart: React.FC = () => {
    const state = useStore(state => state.cart);

    return (
        <div>
            {state.length === 0 && <EmptyCart />}
            {state.length !== 0 && <CartItems state={state} />}
            {state.length !== 0 && <Buttons />}
        </div>
    );
};

export default Cart;