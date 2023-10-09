import React from 'react';
import Loading from '../Pages/Loading';
import { useQuery } from 'react-query';
import Product from './Product';

const AllProducts = () => {
    const { data: products, isLoading, refetch } = useQuery(['products'], () => fetch(`https://e-tools-api.onrender.com/products`)
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-4 py-12 divide-y-4 divide-gray-400'>
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
                    ></Product>).reverse()
                }
            </div>
        </div>
    );
};

export default AllProducts;