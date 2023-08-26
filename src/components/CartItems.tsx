import React from 'react';
import { CartModel } from '../model/CartModel';
import useStore from '../zustand/useStore';

interface PropTypes {
    state: CartModel[];
}

const CartItems: React.FC<PropTypes> = ({ state }) => {
    const addCartItem = useStore(state => state.addCart);
    const removeCartItem = useStore(state => state.delCart);

    const handleDel = (prod: CartModel) => {
        removeCartItem(prod);
    }

    const handleAdd = (prod: CartModel) => {
        addCartItem(prod);
    }

    return (
        <>
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                {state.map((item) => (
                    <div className="container py-4">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <img src={item.image} alt={item.title} height="200px" width="180px" />
                            </div>
                            <div className="col-md-4">
                                <h3>{item.title}</h3>
                                <p className="lead fw-bold">
                                    {item.qty} &#215; {item.price} = $ {item.qty * item.price}
                                </p>
                                <button className="btn btn-outline-dark me-4" onClick={() => handleDel(item)}>
                                    <i className="fa fa-minus"></i>
                                </button>
                                <button className="btn btn-outline-dark" onClick={() => handleAdd(item)}>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CartItems;
