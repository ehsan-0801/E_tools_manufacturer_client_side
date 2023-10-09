import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import Banner from './Banner';
import Searchbar from './Searchbar';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    const menuitems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/all_products">All products</NavLink></li>
        { user && <li><NavLink to="/dashboard">Dashboard</NavLink></li> }
        {
            user ?
                <li><Link onClick={ handleSignOut } to="/">Sign Out</Link></li>
                :
                <li><NavLink to="/signin">Login</NavLink></li> }
        { !user && <li><NavLink to="/signup">Signup</NavLink></li> }
    </>
    return (
        <div>
            <Searchbar></Searchbar>
            <div className="navbar  bg-secondary">
                <div className="navbar-end w-96">
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-secondary lg:hidden">
                            <svg viewBox="0 0 100 80" width="40" height="40">
                                <rect width="100" height="20"></rect>
                                <rect y="30" width="100" height="20"></rect>
                                <rect y="60" width="100" height="20"></rect>
                            </svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            { menuitems }
                        </ul>
                    </div>
                </div>
                <div className="hidden lg:flex flex-1 ml-12">
                    <ul className="menu menu-horizontal p-0">
                        { menuitems }
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;