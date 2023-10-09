import React from 'react';
import { toast } from 'react-toastify';

const DeletingConfirmModal = ({ deletingProduct, refetch, setDeletingProduct }) => {
    const { Name, _id } = deletingProduct;
    const handleDelete = () => {
        fetch(`https://e-tools-api.onrender.com/product/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Product: ${Name} is deleted.`)
                    setDeletingProduct(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete  ${ Name }!</h3>
                    <div class="modal-action">
                        <button onClick={ () => handleDelete() } class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeletingConfirmModal;