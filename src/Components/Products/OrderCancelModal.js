import React from 'react';

const OrderCancelModal = ({ orderId }) => {
    return (
        <div class="modal" id="orderCancelModal">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Are you sure?</h3>
                <a href="#" class="btn">ok</a>
            </div>
        </div>
    );
};

export default OrderCancelModal;