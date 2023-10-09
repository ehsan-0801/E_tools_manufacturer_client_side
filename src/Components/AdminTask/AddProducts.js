import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
const AddProducts = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        console.log(data);
        const url = `https://e-tools-api.onrender.com/products`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Watch Added Successfully')
                console.log(result);
            })

    }
    return (
        <div className="border border-primary border-collapse">
            <h2 className="text-2xl">Add a Product</h2>
            <form onSubmit={ handleSubmit(onSubmit) }>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="input input-bordered w-full max-w-xs"
                        { ...register("Name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        }) }
                    />
                    <label className="label">
                        { errors.Name?.type === 'required' && <span className="label-text-alt text-red-500">{ errors.Name.message }</span> }
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product Description"
                        className="input input-bordered w-full max-w-xs"
                        { ...register("Description", {
                            required: {
                                value: true,
                                message: 'Product Description is Required'
                            }
                        }) }
                    />
                    <label className="label">
                        { errors.Description?.type === 'required' && <span className="label-text-alt text-red-500">{ errors.Description.message }</span> }
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Price"
                        className="input input-bordered w-full max-w-xs"
                        { ...register("Price", {
                            required: {
                                value: true,
                                message: 'Price is Required'
                            },
                        }) }
                    />
                    <label className="label">
                        { errors.Price?.type === 'required' && <span className="label-text-alt text-red-500">{ errors.Price.message }</span> }
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Available Quantity"
                        className="input input-bordered w-full max-w-xs"
                        { ...register("QuantityAvailable", {
                            required: {
                                value: true,
                                message: 'Insert the available quantity'
                            },
                        }) }
                    />
                    <label className="label">
                        { errors.QuantityAvailable?.type === 'required' && <span className="label-text-alt text-red-500">{ errors.QuantityAvailable.message }</span> }
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Minimum Quantity of sell</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Minimum Quantity of sell"
                        className="input input-bordered w-full max-w-xs"
                        { ...register("QuantityMinimum", {
                            required: {
                                value: true,
                                message: 'Minimum Quantity must be inserted'
                            },
                        }) }
                    />
                    <label className="label">
                        { errors.QuantityMinimum?.type === 'required' && <span className="label-text-alt text-red-500">{ errors.QuantityMinimum.message }</span> }
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Photo URL"
                        className="input input-bordered w-full max-w-xs"
                        { ...register("image", {
                            required: {
                                value: true,
                                message: 'Image URL is Required'
                            }
                        }) }
                    />
                    <label className="label">
                        { errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{ errors.image.message }</span> }
                    </label>
                </div>

                <input className='btn btn-primary btn-outline w-full max-w-xs text-white' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProducts;