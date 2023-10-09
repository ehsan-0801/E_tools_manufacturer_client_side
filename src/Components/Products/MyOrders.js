import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import OrderCancelModal from './OrderCancelModal';

const MyOrders = () => {
    const [modal, setModal] = useState(null)
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const handleDelete = (id) => {
        const proceed = window.confirm("Are You sure?")
        if (proceed) {
            fetch(`https://e-tools-api.onrender.com/order/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        toast.success(`deleted.`)
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining)
                    }
                })
        }
    }

    useEffect(() => {
        if (user) {
            fetch(`https://e-tools-api.onrender.com/orders?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setOrders(data);
                });
        }
    }, [user])
    return (
        <div>
            <h2>My Orders: { orders.length }</h2>
            <h2>Your Name: { user.displayName }</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Ordered Item</th>
                            <th>Ordered Quantity</th>
                            <th>Total Price</th>
                            <th>Adress</th>
                            <th>Phone Number</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={ order._id }>
                                <th>{ index + 1 }</th>
                                <td>{ order.productName }</td>
                                <td>{ order.OrderQuantity }</td>
                                <td>{ order.TotalPrice }</td>
                                <td>{ order.Address }</td>
                                <td>{ order.Phone }</td>
                                <td>
                                    <label htmlFor="orderCancelModal" class="btn btn-xs btn-primary modal-button" onClick={ () => handleDelete(order._id) }>Cancel</label>

                                </td>

                                <td>
                                    { (order.TotalPrice && order.status == "unpaid") && <Link to={ `/dashboard/payment/${order._id}` }><button className='btn btn-xs btn-accent'>pay</button></Link> }
                                    { (order.TotalPrice && order.status == "Pending") && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{ order.transactionId }</span></p>
                                    </div> }
                                </td>
                                {/* <td>
                                    
                                    
                                </td> */}
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;