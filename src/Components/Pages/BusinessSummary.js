import React from 'react';
import { useQuery } from 'react-query';
import Loading from './Loading';

const BusinessSummary = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://e-tools-api.onrender.com/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="py-4">
            <h1 className="text-3xl text-primary text-center font-bold py-4">Our Services are All over The World</h1>
            <div className="flex justify-center">
                <div class="stats shadow ">
                    <div class="stat place-items-center">
                        <div class="stat-title">Total Users</div>
                        <div class="stat-value">{ users.length }K</div>
                        <div class="stat-desc">From January 1st to February 1st</div>
                    </div>
                    <div class="stat place-items-center">
                        <div class="stat-title">Products</div>
                        <div class="stat-value text-secondary">4,200</div>
                        <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
                    </div>
                    <div class="stat place-items-center">
                        <div class="stat-title">Sells</div>
                        <div class="stat-value">1,200</div>
                        <div class="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;