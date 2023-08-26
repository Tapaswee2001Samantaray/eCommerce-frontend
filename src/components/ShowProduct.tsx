import React from 'react';
import { ProductModel } from '../model/ProductModel';
import { NavLink } from 'react-router-dom';
import useStore from '../zustand/useStore';
import { CartModel } from '../model/CartModel';

interface PropTypes {
    product: ProductModel | null;
}

const ShowProduct: React.FC<PropTypes> = ({ product }) => {

    const addProduct = useStore(state => state.addCart);
    const addProductToCart = (prod: ProductModel | null) => {
        if (prod) {
            const cartProduct: CartModel = {
                id: prod.id,
                title: prod.title,
                price: prod.price,
                description: prod.description,
                category: prod.category,
                image: prod.image,
                rating: prod.rating,
                qty: 1
            }
            addProduct(cartProduct);
        }
    }

    return (
        <>
            <div className="col-md-6">
                <img
                    src={product?.image}
                    alt={product?.title}
                    height="400px"
                    width="400px"
                />
            </div>
            <div className="col-md-6">
                <h4 className="text-uppercase text-black-50">
                    {product?.category}
                </h4>
                <h1 className="display-5">{product?.title}</h1>
                <p className="lead fw-bolder">
                    Rating {product?.rating && product.rating.rate}
                    <i className="fa fa-star"></i>
                </p>
                <h3 className="display-6 fw-bold my-4">
                    $ {product?.price}
                </h3>
                <p className="lead">{product?.description}</p>
                <button className="btn btn-outline-dark px-4 py-2" onClick={() => addProductToCart(product)}>
                    Add to Cart
                </button>
                <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                    Go to Cart
                </NavLink>
            </div>
        </>
    );
};

export default ShowProduct;