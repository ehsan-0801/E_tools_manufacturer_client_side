import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://e-tools-api.onrender.com/reviews")
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className='my-36'>
            <h4 className='text-2xl text-primary text-center font-bold my-12'>REVIEWS</h4>
            <div
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1200"
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-6 lg:mx-24'>
                {
                    reviews.map(review => <Review
                        key={ review._id }
                        review={ review }
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;