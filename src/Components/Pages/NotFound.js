import React from 'react';

const NotFound = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <div>
                    <h1 className="text-6xl text-primary font-bold">| 404 |</h1>
                </div>
                <div>
                    <h1 class="text-2xl">The Page is Not Found</h1>
                </div>
            </div>
        </div>
    );
};

export default NotFound;