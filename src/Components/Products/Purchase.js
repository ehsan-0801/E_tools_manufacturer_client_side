import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';

const Purchase = () => {
    const [user] = useAuthState(auth);
    // console.log(user);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [active, setActive] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    useEffect(() => {
        const url = `https://e-tools-api.onrender.com/products/${id}`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, []);
    const onChange = data => {
        console.log(data);
    }
    const handleOrder = (event) => {
        event.preventDefault();
        console.log(handleOrder);
        const name = user.displayName;
        const uid = user.uid;
        const email = user.email;
        const productName = product.Name;
        const OrderQuantity = parseInt(event.target.orderQuantity.value);
        const TotalPrice = parseInt(event.target.orderQuantity.value) * parseInt(product.price);
        const Address = event.target.Address.value;
        const Phone = event.target.Phone.value;
        const Information = event.target.Information.value;
        const status = 'unpaid'
        let newOrder = {
            userName: name,
            userEmail: email,
            userId: uid,
            productName,
            OrderQuantity,
            TotalPrice,
            Address,
            Phone,
            Information,
            status
        }
        console.log(newOrder);
        // const url = ;
        fetch('https://e-tools-api.onrender.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Order Placed successfully`)
                    navigate(`/dashboard/myorders`);
                    event.target.reset()
                }
                else {
                    toast.error(`There is a error in input`)
                }
            });
    }


    return (
        <div>
            <ToastContainer />

            <div className="hero min-h-screen bg-base-300 py-8">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={ product.image } className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">Product Name: { product.Name }</h1>
                        <div className="flex justify-between py-4">
                            <p className='text-2xl'>Price: { product.Price } BDT</p>
                            <p className='text-2xl'>Quantity in Stock: { product.QuantityAvailable }</p>
                        </div>
                        <p className="py-6">{ product.Description }</p>
                        <div className="border border-none shadow-2xl p-8 w-96">

                            <form onBLur={ handleSubmit(onChange) } onSubmit={ (handleOrder) }>

                                <div>

                                    <div className="flex gap-3 mb-2 w-48">
                                        <label className="label">
                                            <span className="label-text">Quantity</span>
                                        </label>
                                        <input className="input input-bordered" type="number" { ...register("orderQuantity",
                                            {
                                                min: {
                                                    value: product.QuantityMinimum + 1,
                                                    message: `Minimum Order Quantity is ${product.QuantityMinimum}`
                                                },
                                                max: {
                                                    value: product.QuantityAvailable - 1,
                                                    message: `Maximum order Quantity is ${product.QuantityAvailable}`
                                                }
                                            }) } />
                                        <label className="label">
                                            { errors.orderQuantity?.type === 'min' && <span className="label-text-alt text-red-500">{ errors.orderQuantity.message }</span> }
                                            { errors.orderQuantity?.type === 'max' && <span className="label-text-alt text-red-500">{ errors.orderQuantity.message }</span> }
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex gap-4 mb-2 w-48">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>
                                        <input type="text" placeholder="Address of Shipment" className="input input-bordered"
                                            { ...register("Address", {
                                                required: {
                                                    value: true,
                                                    message: 'Address of Shipment is Required'
                                                },
                                            }) }
                                        />
                                        <label className="label">
                                            { errors.Address?.type === 'required' && <span className="label-text-alt text-red-500">{ errors.Address.message }</span> }
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex gap-7 mb-2 w-48">
                                        <label className="label">
                                            <span className="label-text">Phone</span>
                                        </label>
                                        <input type="text" placeholder="Phone Number" className="input input-bordered"
                                            { ...register("Phone", {
                                                required: {
                                                    value: true,
                                                    message: 'Please input a Phone number htmlFor contact'
                                                },
                                            }) }
                                        />
                                        <label className="label">
                                            { errors.Phone?.type === 'required' && <span className="label-text-alt text-red-500">{ errors.Phone.message }</span> }
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex gap-1 mb-4 w-72">
                                        <label className="label">
                                            <span className="label-text">Information</span>
                                        </label>
                                        <textarea className="textarea textarea-bordered lg:w-full" placeholder="additional requirements" { ...register("Information", {
                                        }) }></textarea>
                                    </div>
                                </div>
                                <div className=''>
                                    <button className="btn btn-primary w-full" disabled={ errors.orderQuantity?.type === 'min' || errors.orderQuantity?.type === 'max' }>Order</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default Purchase;