import React from "react";
import banner from "../images/banner.webp"
import "../css/banner.css"

const Banner = () => {
    return (
        <div >
            <img className="bannerImage" src={banner} />

        </div>
    )
};

export default Banner;