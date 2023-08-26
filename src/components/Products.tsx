import React, { useState, useEffect } from 'react';
import { ProductModel } from '../model/ProductModel';
import { ProductService } from '../services/ProductService';
import ShowProducts from './ShowProducts';
import Loadings from './Loadings';

const Products: React.FC = () => {
    const [data, setData] = useState<ProductModel[]>([]);
    const [filter, setFilter] = useState<ProductModel[]>(data);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        let componentMounted = true;
        const getProducts = async () => {
            try {
                setLoading(true);
                const response = await ProductService.getAllProducts();
                if (componentMounted) {
                    setData(response.data);
                    setFilter(response.data);
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error Fatching Products", error);
                setLoading(false);
            }
        }
        getProducts();

        return () => {
            componentMounted = false;
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loadings /> : <ShowProducts filter={filter} setFilter={setFilter} data={data} />}
                </div>
            </div>
        </div>
    );
};

export default Products;