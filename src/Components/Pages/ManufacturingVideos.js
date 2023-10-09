import React from 'react';

const ManufacturingVideos = () => {
    return (
        <div>
            <h1 className="text-6xl text-primary text-center font-bold my-4">Some Important to Notice</h1>
            <div data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1200"
                className="flex flex-col lg:flex-row justify-center gap-5">
                <iframe width="700" height="400" src="https://www.youtube.com/embed/zepldzNnaAU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="700" height="400" src="https://www.youtube.com/embed/KUD3fe8z3rA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default ManufacturingVideos;