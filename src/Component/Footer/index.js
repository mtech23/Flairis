import React from "react";
// import "./style.css";
import logoF from "../../Assets/images/logo-f.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (
        <div>
            <section className=" main-page-bg footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="logo-footer-wrapper">
                                <img src={logoF} className="img-fluid" />
                            </div>
                        </div>

                    </div>
                    <div className="row mt-5 mb-5 ">
                        <div className="col-lg-4">
                            <h5 className="useful-links-head">USEFUL LINKS</h5>
                            <div className="">
                                <p className="useful-links-para">Book An Appointment</p>
                                <p className="useful-links-para">Education</p>
                                <p className="useful-links-para">About Us</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h5 className="useful-links-head">Policies</h5>
                            <p className="useful-links-para">Book An Appointment</p>
                            <p className="useful-links-para">Education</p>
                            <p className="useful-links-para">About Us</p>
                        </div>
                        <div className="col-lg-4">
                            <h5 className="useful-links-head">Contact Us</h5>
                            <p className="useful-links-para">Book An Appointment</p>
                            <p className="useful-links-para">Education</p>
                            <p className="useful-links-para">About Us</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid footer-bottom-wrapper">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="footer-title">
                                Anything less is
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-social-icons-wrapper">
                                <FontAwesomeIcon icon={faInstagram} className="footer-social-icons" />
                                <FontAwesomeIcon icon={faFacebook} className="footer-social-icons" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="footer-title text-end">
                            simply unacceptable
                            </h2>
                        </div>
                    </div>
                    <div className="row mt-2 mb-3">
                        <div className="col-lg-12">
                            <p className="copyright-text">
                            Copyright © 2024.
                            <span className="reserved-text">All rights reserved.</span>	
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
export default Footer;