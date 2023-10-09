import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Pages/Loading';

const OrdersRow = ({ order }) => {
    const [complete, setComplete] = useState(false);
    const orderShipment = () => {
        fetch(`https://e-tools-api.onrender.com/order/${order._id}`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Shipping Failed');
                }
                return res.json()
            })
            .then(data => {
                if (data) {
                    toast.success(`Order Shipped`);
                }

            })
    }
    return (
        <tr>
            <td>{ order.userName }</td>
            <td>{ order.userEmail }</td>
            <td>{ order.productName }</td>
            <td>{ order.OrderQuantity }</td>
            <td>{ order.TotalPrice }</td>
            <td>{ order.status }</td>
            <td>
                { order.status !== "Shipped" && <button onClick={ orderShipment } className='btn btn-xs btn-primary'>Shipment</button> }
            </td>
        </tr>
    );
};

export default OrdersRow;