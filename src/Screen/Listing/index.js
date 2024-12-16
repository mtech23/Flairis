import React from "react";
// import "./style.css";
import UserLayout from "../../Component/UserLayout";
import Banner from "../../Component/Banner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import CustomCard from "../../Component/CustomCard";
import pen from "../../Assets/images/pen.webp";
import Round1 from "../../Assets/images/Round1.webp"
import ass1 from "../../Assets/images/ass1.jpg"
import ass2 from "../../Assets/images/ass2.jpg"
import ass3 from "../../Assets/images/ass3.jpg"
import ass4 from "../../Assets/images/ass4.webp"
import ass5 from "../../Assets/images/ass5.webp"
import ass6 from "../../Assets/images/ass6.webp"
import ass7 from "../../Assets/images/ass7.webp"
import ass8 from "../../Assets/images/ass8.webp"
import ass9 from "../../Assets/images/ass9.webp"
import ass10 from "../../Assets/images/ass10.webp"
import ass11 from "../../Assets/images/ass11.webp"
import ass12 from "../../Assets/images/ass12.webp"
import necklacemain from "../../Assets/images/necklace-main.jpg"
import necklacemain2 from "../../Assets/images/necklace-main2.jpg"
import banner2 from "../../Assets/images/banner-2.png";

function Listing() {
    return (
        <>
            <UserLayout>
                <Banner
                    name="Necklace"
                    daimonImg={banner2}
                />
                <div className="deatil-page-bg">
                    <section className="filter-section">
                        <div className="container">
                            <div className="row ">
                                <div className="col-lg-12">
                                    <div className="filter-drop-div">
                                        <div class="dropdown">
                                            <button class="custom-filter-btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                Stone Shape
                                                <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                                            </button>

                                            <ul class="dropdown-menu filter-list-bg" aria-labelledby="dropdownMenuButton1">
                                                <div className="drop-down-wrapper">
                                                    <li>
                                                        <a class="drop-item-text " href="#">
                                                            <div className="drop-down-list-wrapper">
                                                                <img src={pen} className="img-fluid filter-img" />
                                                                Princess
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="drop-item-text " href="#">
                                                            <div className="drop-down-list-wrapper">
                                                                <img src={Round1} className="img-fluid filter-img" />
                                                                Round
                                                            </div>
                                                        </a>
                                                    </li>
                                                </div>

                                            </ul>

                                        </div>

                                        <div class="dropdown">
                                            <button class="custom-filter-btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                Stone Shape
                                                <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                                            </button>

                                            <ul class="dropdown-menu filter-list-bg" aria-labelledby="dropdownMenuButton1">
                                                <li>
                                                    <a class="dropdown-list-item-text active-list" href="#">
                                                        Default sorting
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-list-item-text" href="#">
                                                        Sort by latest
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-list-item-text" href="#">
                                                        Sort by price: low to high
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-list-item-text" href="#">
                                                        Sort by price: high to low
                                                    </a>
                                                </li>
                                            </ul>

                                        </div>

                                        <div class="dropdown">
                                            <button class="custom-filter-btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                Pricing
                                                <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                                            </button>

                                            <ul class="dropdown-menu filter-list-bg" aria-labelledby="dropdownMenuButton1">
                                                <li>
                                                    <a class="dropdown-list-item-text active-list" href="#">
                                                        Default sorting
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-list-item-text" href="#">
                                                        Sort by latest
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-list-item-text" href="#">
                                                        Sort by price: low to high
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-list-item-text" href="#">
                                                        Sort by price: high to low
                                                    </a>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="detail-card-listing-section">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <CustomCard
                                        cardImg={ass1}
                                        title="Flower Diamond Pendant 2 ctw"
                                        price="$2,500.00"
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 card-space-one">
                                    <CustomCard
                                        cardImg={ass2}
                                        title="Flower Diamond Pendant 1.5 ctw"
                                        price="$2,000.00"
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 cards-space">
                                    <CustomCard
                                        cardImg={ass3}
                                        title="Flower Diamond Pendant 1 ctw"
                                        price="$1,500.00"
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 cards-space">
                                    <CustomCard
                                        cardImg={ass4}
                                        title="The Serena Diamond Pendant"
                                        price="$1,700.00"
                                    />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-3 col-md-6">
                                    <CustomCard
                                        cardImg={ass5}
                                        title="Mira Diamond Pendant"
                                        price="$1,600.00"
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 card-space-one">
                                    <CustomCard
                                        cardImg={ass6}
                                        title="Mila Diamond Pendant"
                                        price="$1,600.00"
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 cards-space">
                                    <CustomCard
                                        cardImg={ass7}
                                        title="Pearluxe Tear Drop Pendant"
                                        price="$1,500.00"
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 cards-space">
                                    <CustomCard
                                        cardImg={ass8}
                                        title="Butterfly Diamond Pendant"
                                        price="$1,000.00"
                                    />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-6">
                                    <div className="left-custom-img">
                                        <img src={necklacemain} className="img-fluid card-custom-img" />
                                    </div>
                                </div>
                                <div className="col-lg-6 ">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 cards-space">
                                            <CustomCard
                                                cardImg={ass9}
                                                title="True Heart Diamond Pendant"
                                                price="$1,000.00"
                                            />
                                        </div>
                                        <div className="col-lg-6 col-md-6 cards-space">
                                            <CustomCard
                                                cardImg={ass10}
                                                title="Velvet Diamond Pendant"
                                                price="$1,600.00"
                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-lg-6 col-md-6 ">
                                            <CustomCard
                                                cardImg={ass11}
                                                title="Infinity Diamond Pendant"
                                                price="$1,000.00"
                                            />
                                        </div>
                                        <div className="col-lg-6 col-md-6 card-space-one">
                                            <CustomCard
                                                cardImg={ass12}
                                                title="Flower Diamond Pendant"
                                                price="$1,500.00"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-lg-3 col-md-6">
                                    <CustomCard
                                        cardImg={ass5}
                                        title="Mira Diamond Pendant"
                                        price="$1,600.00"
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 card-space-one">
                                    <CustomCard
                                        cardImg={ass6}
                                        title="Mila Diamond Pendant"
                                        price="$1,600.00"
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 cards-space">
                                    <CustomCard
                                        cardImg={ass7}
                                        title="Pearluxe Tear Drop Pendant"
                                        price="$1,500.00"
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 cards-space">
                                    <CustomCard
                                        cardImg={ass8}
                                        title="Butterfly Diamond Pendant"
                                        price="$1,000.00"
                                    />
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-lg-3 col-md-6">
                                    <CustomCard
                                        cardImg={ass5}
                                        title="Mira Diamond Pendant"
                                        price="$1,600.00"
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 card-space-one">
                                    <CustomCard
                                        cardImg={ass6}
                                        title="Mila Diamond Pendant"
                                        price="$1,600.00"
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 cards-space">
                                    <CustomCard
                                        cardImg={ass7}
                                        title="Pearluxe Tear Drop Pendant"
                                        price="$1,500.00"
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 cards-space">
                                    <CustomCard
                                        cardImg={ass8}
                                        title="Butterfly Diamond Pendant"
                                        price="$1,000.00"
                                    />
                                </div>
                            </div>

                            <div className="row mt-4">                                
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <CustomCard
                                                cardImg={ass9}
                                                title="True Heart Diamond Pendant"
                                                price="$1,000.00"
                                            />
                                        </div>
                                        <div className="col-lg-6 col-md-6 card-space-one">
                                            <CustomCard
                                                cardImg={ass10}
                                                title="Velvet Diamond Pendant"
                                                price="$1,600.00"
                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-lg-6 col-md-6">
                                            <CustomCard
                                                cardImg={ass11}
                                                title="Infinity Diamond Pendant"
                                                price="$1,000.00"
                                            />
                                        </div>
                                        <div className="col-lg-6 col-md-6 card-space-one">
                                            <CustomCard
                                                cardImg={ass12}
                                                title="Flower Diamond Pendant"
                                                price="$1,500.00"
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-6 cards-space">
                                    <div className="left-custom-img">
                                        <img src={necklacemain2} className="img-fluid card-custom-img" />
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-lg-3 col-md-6">
                                    <CustomCard
                                        cardImg={ass5}
                                        title="Mira Diamond Pendant"
                                        price="$1,600.00"
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 card-space-one">
                                    <CustomCard
                                        cardImg={ass6}
                                        title="Mila Diamond Pendant"
                                        price="$1,600.00"
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 cards-space">
                                    <CustomCard
                                        cardImg={ass7}
                                        title="Pearluxe Tear Drop Pendant"
                                        price="$1,500.00"
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 cards-space">
                                    <CustomCard
                                        cardImg={ass8}
                                        title="Butterfly Diamond Pendant"
                                        price="$1,000.00"
                                    />
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-lg-3 col-md-6 ">
                                    <CustomCard
                                        cardImg={ass5}
                                        title="Mira Diamond Pendant"
                                        price="$1,600.00"
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 card-space-one">
                                    <CustomCard
                                        cardImg={ass6}
                                        title="Mila Diamond Pendant"
                                        price="$1,600.00"
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 cards-space">
                                    <CustomCard
                                        cardImg={ass7}
                                        title="Pearluxe Tear Drop Pendant"
                                        price="$1,500.00"
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 cards-space">
                                    <CustomCard
                                        cardImg={ass8}
                                        title="Butterfly Diamond Pendant"
                                        price="$1,000.00"
                                    />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-6">
                                    <div className="left-custom-img">
                                        <img src={necklacemain} className="img-fluid card-custom-img" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 cards-space">
                                            <CustomCard
                                                cardImg={ass9}
                                                title="True Heart Diamond Pendant"
                                                price="$1,000.00"
                                            />
                                        </div>
                                        <div className="col-lg-6 col-md-6 cards-space">
                                            <CustomCard
                                                cardImg={ass10}
                                                title="Velvet Diamond Pendant"
                                                price="$1,600.00"
                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-lg-6 col-md-6">
                                            <CustomCard
                                                cardImg={ass11}
                                                title="Infinity Diamond Pendant"
                                                price="$1,000.00"
                                            />
                                        </div>
                                        <div className="col-lg-6 col-md-6 card-space-one">
                                            <CustomCard
                                                cardImg={ass12}
                                                title="Flower Diamond Pendant"
                                                price="$1,500.00"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-lg-3 col-md-6">
                                    <CustomCard
                                        cardImg={ass5}
                                        title="Mira Diamond Pendant"
                                        price="$1,600.00"
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 card-space-one">
                                    <CustomCard
                                        cardImg={ass6}
                                        title="Mila Diamond Pendant"
                                        price="$1,600.00"
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 cards-space">
                                    <CustomCard
                                        cardImg={ass7}
                                        title="Pearluxe Tear Drop Pendant"
                                        price="$1,500.00"
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 cards-space">
                                    <CustomCard
                                        cardImg={ass8}
                                        title="Butterfly Diamond Pendant"
                                        price="$1,000.00"
                                    />
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-lg-3 col-md-6">
                                    <CustomCard
                                        cardImg={ass5}
                                        title="Mira Diamond Pendant"
                                        price="$1,600.00"
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 card-space-one">
                                    <CustomCard
                                        cardImg={ass6}
                                        title="Mila Diamond Pendant"
                                        price="$1,600.00"
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 cards-space">
                                    <CustomCard
                                        cardImg={ass7}
                                        title="Pearluxe Tear Drop Pendant"
                                        price="$1,500.00"
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 cards-space">
                                    <CustomCard
                                        cardImg={ass8}
                                        title="Butterfly Diamond Pendant"
                                        price="$1,000.00"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </UserLayout>

        </>
    )
};

export default Listing;
