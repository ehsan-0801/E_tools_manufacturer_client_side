import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const UpdateModal = ({ user }) => {
    const email = user.email
    console.log(email)
    const UpdateProfile = event => {
        event.preventDefault();
        const Education = event.target.Education.value;
        const location = event.target.location.value;
        const LinkedIn = event.target.LinkedIn.value;
        const phone = event.target.phone.value;
        const profile = {
            Education,
            location,
            LinkedIn,
            phone
        }
        console.log(profile)

        fetch(`https://e-tools-api.onrender.com/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {

                    toast(`Profile Updated`)
                }
                else {
                    toast.error(`Some error Occured`)
                }
            });
    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            <input type="checkbox" id="profileUpdate-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label htmlFor="profileUpdate-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary text-center">Updating htmlFor: { user.displayName }</h3>
                    <form onSubmit={ UpdateProfile } className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" name="Education" placeholder="Education" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="location" placeholder="location (city/district)" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="LinkedIn" placeholder="LinkedIn profile link" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;