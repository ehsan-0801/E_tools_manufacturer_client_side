import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DeletingConfirmModal from './DeletingConfirmModal';
import './ManageProduct.css';
const ManageProduct = ({ product, index, refetch, setDeletingProduct }) => {
    const { _id, Name, image, price, QuantityAvailable } = product;
    return (
        <div class="card w-52 bg-base-100 shadow-2xl ">
            <figure className="hover-rotate1"><img className="h-36" src={ image } alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{ Name }!</h2>
                <p>{ price } BDT.</p>
                <p><small>Available: { QuantityAvailable }</small></p>
                <div class="card-actions justify-start">
                    <label onClick={ () => setDeletingProduct(product) } for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
                </div>
            </div>
        </div >
    );
};

export default ManageProduct;