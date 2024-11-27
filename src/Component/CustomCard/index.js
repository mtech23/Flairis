import React from "react";
import "./style.css";

function CustomCard(props) {
    return (
        <div>
            <div className="detail-card-wrapper">
                <img src={props?.cardImg} className="img-fluid detail-card-img" />
                <div className="text-center">
                    <a className="detail-card-title" href="#"> <span>{props?.title}</span></a>
                    <p className="detail-card-price">{props?.price}</p>
                </div>
            </div>
        </div>

    )
};

export default CustomCard;