import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{ review.name }</h2>
                <p class="text-secondary">Rated:{ review.rating }</p>
                <p><small>{ review.comment }</small></p>
            </div>
        </div>
    );
};

export default Review;