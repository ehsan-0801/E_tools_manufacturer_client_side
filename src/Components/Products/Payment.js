import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Pages/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L46mRBfwq9zvEwhvzNxSjfDZJNwqCvGVbXo4Qco6JCRVxQ5WTWfUAYEXnNN6Pwr9IR6b09gxTlMuAiAg8V13pV500BPuOYu4e');
const Payment = () => {
    const { id } = useParams();
    const url = `https://e-tools-api.onrender.com/orders/${id}`
    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div>
                <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                    <div class="card-body">
                        <p className="text-success font-bold">Hello, <span className="text-blue-400">{ order.userName }</span></p>
                        <h2 class="card-title">Please Pay for <span className="text-blue-400">{ order.productName }</span></h2>
                        <p>Your Placement Address: <span className='text-blue-600'>{ order.Address }</span> at <span className='text-blue-600'>{ order.slot }</span></p>
                        <p>Order Qunatity: <span className='text-blue-600'>${ order.OrderQuantity }</span></p>
                        <p>Please pay: <span className='text-blue-600'>${ order.TotalPrice }</span></p>
                    </div>
                </div>
                <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                    <div class="card-body">
                        <Elements stripe={ stripePromise }>
                            <CheckoutForm order={ order } />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;