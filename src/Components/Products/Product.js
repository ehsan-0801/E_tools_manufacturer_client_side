import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';
const Product = ({ product }) => {
    const { _id, Name, image, Price, QuantityAvailable } = product;
    const navigate = useNavigate();
    const navigateProductDetails = _id => {
        navigate(`/purchase/${_id}`);
    }
    return (
        <div class="card w-96  shadow-2xl ">
            <figure className="rounded "><img className="h-72 w-72 " src={ image } alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{ Name }!</h2>
                <p className='font-semibold'>{ Price } BDT.</p>
                <p><small>Available: { QuantityAvailable }</small></p>
                <div class="card-actions">
                    <button onClick={ () => navigateProductDetails(_id) } class="btn btn-primary btn-outline w-full">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Product;