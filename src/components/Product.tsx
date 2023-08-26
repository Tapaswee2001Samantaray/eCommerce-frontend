import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductModel } from '../model/ProductModel';
import { ProductService } from '../services/ProductService';
import ShowProduct from './ShowProduct';
import Loading from './Loading';

const Product: React.FC = () => {
    const [product, setProduct] = useState<ProductModel | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            try {
                setLoading(true);
                if (id) {
                    const response = await ProductService.getProductByID(parseInt(id));
                    setProduct(response.data);
                    setLoading(false);
                }
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        }
        getProduct();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <div className="container py-5">
                <div className="row py-5">
                    {loading ? <Loading /> : <ShowProduct product={product} />}
                </div>
            </div>
        </div>
    );
};

export default Product;