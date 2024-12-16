import React from "react";
// import "./style.css";
import logoHead from "../../Assets/images/logo-head.png.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons'
function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light custom-header-bg">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <img className="img-fluid header-logo-img" src={logoHead} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link nav-menu-text" aria-current="page" href="#">Engagement Rings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-menu-text" href="#">Bridal Rings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-menu-text" href="#">Jewelry</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-menu-text" href="#">Collections</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-menu-text" href="#">Custom Design</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-menu-text" href="#">The House</a>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                  
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}

                        </ul>
                        <div className="header-btn-cart-div">
                            <button className="booking-btn">Book An Appointment</button>
                            <div className="cart-list-div">
                                <FontAwesomeIcon icon={faUser} className="hedaer-icons"/>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="hedaer-icons"/>
                                <FontAwesomeIcon icon={faHeart}  className="hedaer-icons"/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
}
export default Header;