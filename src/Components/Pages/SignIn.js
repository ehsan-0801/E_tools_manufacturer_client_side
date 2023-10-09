import React, { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import useToken from '../../Hooks/useToken';
const SignIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithGoogle,
        gUser,
        gLoading,
        gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || gUser);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
    );


    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (gLoading || loading) {
        return <Loading></Loading>
    }
    if (error || gError || error1) {
        signInError = <p className='text-red-500 shadow-2xl'><small>{ gError?.message } { error?.message } { error1?.message }</small></p>
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        console.log(email)
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email has been sent');
        }
        else {
            toast('please enter your email address');
        }
    }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }
    return (
        <div className="lg:px-24">
            <ToastContainer />
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row">
                    <div class="text-center lg:text-center px-24">
                        <h1 class="text-5xl text-primary font-bold">Login now!</h1>
                        <p class="py-6">Please Log in to our site E-tools to buy some the authentic tools for Electrical works. Here you can explore products of various types and will get your preferred one.</p>
                    </div>
                    <form class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" onSubmit={ handleSubmit(onSubmit) }>
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input ref={ emailRef } type="email" placeholder="email" class="input input-bordered"
                                    { ...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    }) }
                                />
                                <label className="label">
                                    { errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{ errors.email.message }</span> }
                                    { errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{ errors.email.message }</span> }
                                </label>
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input ref={ passwordRef } type="password" placeholder="password" class="input input-bordered"
                                    { ...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    }) }
                                />
                                <label className="label">
                                    { errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{ errors.password.message }</span> }
                                    { errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{ errors.password.message }</span> }
                                </label>
                                <label class="label">
                                    <button onClick={ resetPassword } class="label-text-alt link link-hover">Forgot Password? Reset Here</button>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>
                            { signInError }
                            <p><small>New to E-tools? <Link className='text-primary font-bold' to="/signup">Create New Account</Link></small></p>
                            <div class="divider">OR</div>
                            <div class="form-control mt-6">
                                <button
                                    onClick={ () => signInWithGoogle() }
                                    class="btn btn-primary btn-outline">Sign in with Google</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;