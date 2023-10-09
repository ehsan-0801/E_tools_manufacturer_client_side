import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Pages/Loading';
import Product from './Product';
import { Link } from 'react-router-dom';

const Products = () => {
    const { data: products, isLoading, refetch } = useQuery(['products'], () => fetch(`https://e-tools-api.onrender.com/products`)
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-12'>
            <h4 className='text-2xl text-primary text-center font-bold my-12'>PRODUCTS</h4>
            <div
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1200"
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-6 lg:mx-24'>
                {
                    products.map(product => <Product
                        key={ product._id }
                        product={ product }
                    // setTreatment={ setTreatment }
                    ></Product>).reverse().slice(0, 6)
                }
            </div>
            <div className="flex justify-end px-24 py-24">
                <Link to="/all_products">
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">See More</button>
                </Link>
            </div>
        </div>
    );
};

export default Products;