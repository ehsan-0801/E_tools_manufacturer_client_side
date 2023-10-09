import React from 'react';
import tools from '../../Assets/tools.jpg';
import './Banner.css';
const Banner = () => {
    return (
        <div className="lg:px-24">
            <div className="hero max-h-screen  bg-neutral bgCustom">
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-5">
                    <div
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        className="max-w-sm rounded-lg shadow-2xl">
                        <img src={ tools } alt="" />
                    </div>
                    <div className="w-96">
                        <h1
                            data-aos="fade-right"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            className="text-5xl font-bold"
                        >We ensure the best quality products
                        </h1>

                        <p
                            data-aos="fade-right"
                            data-aos-delay="400"
                            data-aos-duration="1200"
                            className="py-6">
                            E-tools is a manufacturing plathtmlForm of Electrical tools. We have everything that you need htmlFor working. We sell the best quality that will find in the market.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;