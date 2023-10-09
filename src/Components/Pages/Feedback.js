import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Feedback = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://e-tools-api.onrender.com/feedback`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Feedback Sent')
                console.log(result);
            })
    };
    return (
        <div className="px-36 py-24">
            <h1 className="text-center text-primary text-4xl font-bold my-4">Send Us your feedback</h1>
            <div className='flex justify-center p-6  '>
                <form className='w-96 border-5 border-none shadow-2xl py-12 px-8 bg-gray-300' onSubmit={ handleSubmit(onSubmit) }>
                    <input className='mb-2 input input-bordered w-full' placeholder='email' { ...register("email") } />
                    <br />
                    <textarea className='mb-2 input input-bordered w-full' placeholder='Send Us Your Feedback' { ...register("feedback") } />
                    <br />
                    <input type="submit" className="btn btn-primary w-full" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Feedback;