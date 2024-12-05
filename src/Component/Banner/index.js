import React from "react";
import "./style.css";
import banner1 from "../../Assets/images/banner-1.png";
import banner2 from "../../Assets/images/banner-2.png";



function Banner(props) {
    return (
        <div>
            <section className={`bannerBg ${props?.custombannerBg} apply-now`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="bannerHeading">{props?.name}</h1>
                            <img src={banner1} className="img-fluid banner-one-img" />
                            <img src={props?.daimonImg} className="img-fluid banner-two-img" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
};

export default Banner;