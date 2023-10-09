import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const handleReview = e => {
        e.preventDefault();
        const rating = e.target.rating.value;
        const comment = e.target.comment.value;
        console.log(rating);
        console.log(comment);
        const review = {
            rating,
            comment,
            email: user.email,
            name: user.displayName,
            userId: user.uid,
        }
        fetch(`https://e-tools-api.onrender.com/review/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {

                    toast(`done`)
                }
                else {
                    toast.error(`Some error Occured`)
                }
            });


    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            <h1>{ user.displayName }</h1>
            <form className="flex flex-row" onSubmit={ handleReview }>
                <div className="flex flex-col gap-3 border border-collapse p-5">
                    <label>
                        <span className="peer-invalid:text-red-500 ...">Give Us Rating Please</span>
                    </label>
                    <div className="rating" name="review">
                        <input type="radio" name="rating" value="1" className="mask mask-star" />
                        <input type="radio" name="rating" value="2" className="mask mask-star" />
                        <input type="radio" name="rating" value="3" className="mask mask-star" />
                        <input type="radio" name="rating" value="4" className="mask mask-star" />
                        <input type="radio" name="rating" value="5" className="mask mask-star" />
                    </div>
                    <textarea name="comment" n className="textarea textarea-primary" placeholder="Comment Here"></textarea>
                    <input type="submit" className="btn btn-primary" value="Add Review" />
                </div>
            </form>
        </div>
    );
};

export default AddReview;