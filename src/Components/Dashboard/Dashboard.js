import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content mx-3">
                    <h2 className='text-2xl font-bold text-blue-800'>{ admin ? 'admin' : 'user' }</h2>
                    <label for="dashboard-sidebar" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div class="drawer-side">
                    <label htmlFor="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-accent text-base-content">
                        <li><Link to="/dashboard">My Profile</Link></li>
                        { user && !admin && <>
                            <li><Link to="/dashboard/myorders">My Orders</Link></li>
                            <li><Link to="/dashboard/addreview">Add A Review</Link></li>
                        </>
                        }
                        { admin && <>
                            <li><Link to="/dashboard/manageallorders">Manage All Orders</Link></li>
                            <li><Link to="/dashboard/addproducts">Add Products</Link></li>
                            <li><Link to="/dashboard/users">All Users</Link></li>
                            <li><Link to="/dashboard/manageproducts">Manage Products</Link></li>
                        </> }

                    </ul>

                </div>
            </div>
        </div >
    );
};

export default Dashboard;