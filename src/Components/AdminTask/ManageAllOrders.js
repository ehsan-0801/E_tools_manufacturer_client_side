import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Pages/Loading';
import OrdersRow from './OrdersRow';

const ManageAllOrders = () => {
    const { data: AllOrders, isLoading, refetch } = useQuery('orders', () => fetch('https://e-tools-api.onrender.com/allorder', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">All Orders: { AllOrders.length }</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Order Quantity</th>
                            <th>Total Price</th>
                            <th>Order Status</th>
                            <th>To Do</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            AllOrders.map((order, index) => <OrdersRow
                                key={ order._id }
                                order={ order }
                                refetch={ refetch }
                            ></OrdersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;