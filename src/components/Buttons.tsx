import React from 'react';
import { NavLink } from 'react-router-dom';

const Buttons: React.FC = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-dark mb-5 w-25 mx-auto">
                        Proceed to Checkout
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Buttons;
