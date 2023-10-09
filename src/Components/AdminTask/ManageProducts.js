import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Pages/Loading';
import DeletingConfirmModal from './DeletingConfirmModal';
import ManageProduct from './ManageProduct';
const ManageProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);
    const { data: products, isLoading, refetch } = useQuery(['products'], () => fetch(`https://e-tools-api.onrender.com/products`)
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className=''>
                <h4 className='text-2xl text-primary text-center font-bold my-12'>PRODUCTS</h4>
                <div
                    data-aos="fade-right"
                    data-aos-delay="400"
                    data-aos-duration="1200"
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-6 lg:mx-24'>
                    {
                        products.map((product, index) => <ManageProduct
                            key={ product._id }
                            product={ product }
                            index={ index }
                            refetch={ refetch }
                            setDeletingProduct={ setDeletingProduct }
                        ></ManageProduct>)
                    }
                </div>
            </div>
            { deletingProduct && <DeletingConfirmModal
                deletingProduct={ deletingProduct }
                refetch={ refetch }
                setDeletingProduct={ setDeletingProduct }
            ></DeletingConfirmModal> }
        </div>
    );
};

export default ManageProducts;