import React from "react";
import "./style.css";
import UserLayout from "../../Component/UserLayout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import radiant from "../../Assets/images/Radiant.png"
import oval from "../../Assets/images/oval.webp"
import pen from "../../Assets/images/pen.webp"
import Emerald from "../../Assets/images/Emerald.webp"
import Cushion from "../../Assets/images/Cushion.png"
import Pear from "../../Assets/images/Pear.webp"
import Asscher from "../../Assets/images/Asscher.webp"
import Round1 from "../../Assets/images/Round1.webp"
import Heart from "../../Assets/images/heart.webp"
import Marquise from "../../Assets/images/marquise.webp"
import ringHead from "../../Assets/images/ring-head.webp"
import braclet from "../../Assets/images/Bracelet.jpg"
import BraceletBack from "../../Assets/images/BraceletBack.jpg"
import icons1 from "../../Assets/images/icon1.jpg"
import sparkling from "../../Assets/images/sparkling.jpg"
import glamour from "../../Assets/images/glamour.jpg"
import gameston from "../../Assets/images/gameston-right-img.webp"
import sliderOne from "../../Assets/images/slider-one.webp"
import sliderRing from "../../Assets/images/slider-ring.webp"
import Necklacescaled from "../../Assets/images/Necklace-scaled.jpg"
import necklace from "../../Assets/images/necklace.png"
import Earringscaled from "../../Assets/images/Earring-scaled.jpg"
import earingsback from "../../Assets/images/earingback.png"
import weddingrings from "../../Assets/images/weddingrings.jpg"
import wedrings from "../../Assets/images/wedrings.png"
import engaRings from "../../Assets/images/engaRings.jpeg"
import rings from "../../Assets/images/rings.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// import { faInstagram } from '@fortawesome/free-solid-svg-icons'
import BannerVideo from "../../Assets/images/Banner-Video.mp4";
function Home() {
    const setDirection = useNavigate();

    const navigatePage = () => {
      setDirection("/listing");
    };

    return (
        <div>
            <UserLayout>
                {/* Hero section */}
                <section>
                    <div className="container-fluid px-0">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-video position-relative">
                                    <video src={BannerVideo} autoPlay muted className="hero-video" />
                                    <div className="banner-social-div">
                                        <a href="#" className="banner-social-text">
                                            <FontAwesomeIcon icon={faInstagram} className="banner-social-icons" />
                                            {""}
                                            instagram
                                        </a>
                                    </div>
                                    <div className="banner-social-div-two">
                                        <a href="#" className="banner-social-text">
                                            <FontAwesomeIcon icon={faFacebook} className="banner-social-icons" />

                                            {""}
                                            facebook
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="main-page-bg">
                    {/* Diamond Shapes section */}
                    <section className="daimond-section">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12">
                                    <h2 className="sub-headings-daimond">
                                        Diamond Shapes
                                    </h2>
                                </div>
                                <div className="col-lg-3">
                                    <div className="explore-content-wrapper">
                                        <p className="explore-outer-text">E</p>
                                        <div className="explore-inner-wrapper">
                                            <p className="explore-inner-text">Explore</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-1 col-md-2 col-sm-3 col-3  text-center">
                                    <a href="#" className="specail-daimond-wrapper">
                                        <img src={radiant} className="img-fluid special-daimond-img" />
                                        <span className="specail-daimond-text">Radiant</span>
                                    </a>
                                </div>
                                <div className="col-lg-1 col-md-2 col-sm-3 col-3 text-center">
                                    <a href="#" className="specail-daimond-wrapper">
                                        <img src={oval} className="img-fluid special-daimond-img" />
                                        <span className="specail-daimond-text">Oval</span>
                                    </a>
                                </div>
                                <div className="col-lg-1 col-md-2 col-sm-3 col-3 text-center">
                                    <a href="#" className="specail-daimond-wrapper">
                                        <img src={pen} className="img-fluid special-daimond-img" />
                                        <span className="specail-daimond-text">Princess</span>
                                    </a>
                                </div>
                                <div className="col-lg-1 col-md-2 col-sm-3 col-3  text-center">
                                    <a href="#" className="specail-daimond-wrapper">
                                        <img src={Emerald} className="img-fluid special-daimond-img" />
                                        <span className="specail-daimond-text">Emerald</span>
                                    </a>
                                </div>
                                <div className="col-lg-1 col-md-2 col-sm-3 col-3 text-center">
                                    <a href="#" className="specail-daimond-wrapper">
                                        <img src={Cushion} className="img-fluid special-daimond-img" />
                                        <span className="specail-daimond-text">Cushion</span>
                                    </a>
                                </div>
                                <div className="col-lg-1 col-md-2 col-sm-3 col-3  text-center">
                                    <a href="#" className="specail-daimond-wrapper">
                                        <img src={Asscher} className="img-fluid special-daimond-img" />
                                        <span className="specail-daimond-text">Asscher</span>
                                    </a>
                                </div>
                                <div className="col-lg-1 col-md-2 col-sm-3 col-3  text-center">
                                    <a href="#" className="specail-daimond-wrapper">
                                        <img src={Pear} className="img-fluid special-daimond-img" />
                                        <span className="specail-daimond-text">Pear</span>
                                    </a>
                                </div>
                                <div className="col-lg-1 col-md-2 col-sm-3 col-3 text-center">
                                    <a href="#" className="specail-daimond-wrapper">
                                        <img src={Round1} className="img-fluid special-daimond-img" />
                                        <span className="specail-daimond-text">Round</span>
                                    </a>
                                </div>
                                <div className="col-lg-1 col-md-2 col-sm-3 col-3 text-center">
                                    <a href="#" className="specail-daimond-wrapper">
                                        <img src={Heart} className="img-fluid special-daimond-img" />
                                        <span className="specail-daimond-text">Heart</span>
                                    </a>
                                </div>
                                <div className="col-lg-1 col-md-2 col-sm-3 col-3 text-center">
                                    <a href="#" className="specail-daimond-wrapper">
                                        <img src={Marquise} className="img-fluid special-daimond-img" />
                                        <span className="specail-daimond-text">Marquise</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* collection section start carousel*/}

                    <section>
                        <div className="container-fluid">
                            <div className="row mt-4 mt-5">
                                <div className="col-lg-12">
                                    <div className="collection-main-head">
                                        <div className="ring-head">
                                            <img src={ringHead} className="img-fluid" />
                                        </div>
                                        <h2 className="sub-headings-daimond">
                                            Collections
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4 mt-5 p-4">

                                <Swiper 
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    breakpoints={{
                                        // 640: {
                                        //   slidesPerView: 2,
                                        //   spaceBetween: 20,
                                        // },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 40,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 50,
                                        },
                                        1280: {
                                            slidesPerView: 5,
                                            spaceBetween: 50,
                                        },
                                    }}

                                >
                                    <SwiperSlide>
                                        <div className="">
                                            <div className="card-parent-wrapper">
                                                <a onClick={navigatePage}>
                                                    <div className="collection-card-outer">
                                                        <img src={braclet} className="img-fluid front-card-img" />
                                                        <div className="card-child-wrapper">
                                                            <span className="collection-card-text">Bracelets</span>
                                                        </div>
                                                    </div>
                                                    <div className="collection-card-inner ">
                                                        <img src={BraceletBack} className="img-fluid back-card-img" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="">
                                            <div className="card-parent-wrapper">
                                                <a onClick={navigatePage}>
                                                    <div className="collection-card-outer">
                                                        <img src={Necklacescaled} className="img-fluid front-card-img" />
                                                        <div className="card-child-wrapper">
                                                            <span className="collection-card-text">Necklace</span>
                                                        </div>
                                                    </div>
                                                    <div className="collection-card-inner ">
                                                        <img src={necklace} className="img-fluid back-card-img" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="">
                                            <div className="card-parent-wrapper">
                                                <a onClick={navigatePage}>
                                                    <div className="collection-card-outer">
                                                        <img src={Earringscaled} className="img-fluid front-card-img" />

                                                        <div className="card-child-wrapper">
                                                            <span className="collection-card-text">Earrings</span>
                                                        </div>
                                                    </div>
                                                    <div className="collection-card-inner ">
                                                        <img src={earingsback} className="img-fluid back-card-img" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="">
                                            <div className="card-parent-wrapper">
                                                <a onClick={navigatePage}>
                                                    <div className="collection-card-outer">
                                                        <img src={weddingrings} className="img-fluid front-card-img" />

                                                        <div className="card-child-wrapper">
                                                            <span className="collection-card-text">Wedding Rings</span>
                                                        </div>
                                                    </div>
                                                    <div className="collection-card-inner ">
                                                        <img src={wedrings} className="img-fluid back-card-img" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="">
                                            <div className="card-parent-wrapper">
                                                <a onClick={navigatePage}>
                                                    <div className="collection-card-outer">
                                                        <img src={engaRings} className="img-fluid front-card-img" />

                                                        <div className="card-child-wrapper">
                                                            <span className="collection-card-text">Engagement Rings</span>
                                                        </div>
                                                    </div>
                                                    <div className="collection-card-inner ">
                                                        <img src={rings} className="img-fluid back-card-img" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                </Swiper>

                            </div>
                        </div>
                    </section>


                    {/* collection section start */}

                    {/* <section>
                        <div className="container-fluid">
                            <div className="row mt-4 mt-5">
                                <div className="col-lg-12">
                                    <div className="collection-main-head">
                                        <div className="ring-head">
                                            <img src={ringHead} className="img-fluid" />
                                        </div>
                                        <h2 className="sub-headings-daimond">
                                            Collections
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4 mt-5">
                                <div className="flip-card-div">
                                    <div className="">
                                        <div className="card-parent-wrapper">
                                            <a href="#">
                                                <div className="collection-card-outer">
                                                    <img src={braclet} className="img-fluid front-card-img" />
                                                    <div className="card-child-wrapper">
                                                        <span className="collection-card-text">Bracelets</span>
                                                    </div>
                                                </div>
                                                <div className="collection-card-inner ">
                                                    <img src={BraceletBack} className="img-fluid back-card-img" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="card-parent-wrapper">
                                            <a href="#">
                                                <div className="collection-card-outer">
                                                    <img src={Necklacescaled} className="img-fluid front-card-img" />
                                                    <div className="card-child-wrapper">
                                                        <span className="collection-card-text">Necklace</span>
                                                    </div>
                                                </div>
                                                <div className="collection-card-inner ">
                                                    <img src={necklace} className="img-fluid back-card-img" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="card-parent-wrapper">
                                            <a href="#">
                                                <div className="collection-card-outer">
                                                    <img src={Earringscaled} className="img-fluid front-card-img" />

                                                    <div className="card-child-wrapper">
                                                        <span className="collection-card-text">Earrings</span>
                                                    </div>
                                                </div>
                                                <div className="collection-card-inner ">
                                                    <img src={earingsback} className="img-fluid back-card-img" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="card-parent-wrapper">
                                            <a href="#">
                                                <div className="collection-card-outer">
                                                    <img src={weddingrings} className="img-fluid front-card-img" />

                                                    <div className="card-child-wrapper">
                                                        <span className="collection-card-text">Wedding Rings</span>
                                                    </div>
                                                </div>
                                                <div className="collection-card-inner ">
                                                    <img src={wedrings} className="img-fluid back-card-img" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="card-parent-wrapper">
                                            <a href="#">
                                                <div className="collection-card-outer">
                                                    <img src={engaRings} className="img-fluid front-card-img" />

                                                    <div className="card-child-wrapper">
                                                        <span className="collection-card-text">Engagement Rings</span>
                                                    </div>
                                                </div>
                                                <div className="collection-card-inner ">
                                                    <img src={rings} className="img-fluid back-card-img" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section> */}

                    {/* Flairis Icons section carousel*/}
                    <section className="mt-5">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 className="sub-headings-daimond">
                                        Flairis Icons
                                    </h2>
                                </div>
                            </div>
                            <div className="row">
                                <Swiper className="custom-icons-slider"
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    navigation={true}
                                    modules={[Navigation]}
                                    breakpoints={{
                                        // 640: {
                                        //   slidesPerView: 2,
                                        //   spaceBetween: 20,
                                        // },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 40,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 50,
                                        },
                                        1280: {
                                            slidesPerView: 4,
                                            spaceBetween: 50,
                                        },
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="icons-card">
                                            <div>
                                                <img src={icons1} className="img-fluid" />
                                            </div>
                                            <div className="product-deatil-wraper">
                                                <h2 className="icon-card-text">Tennis Lab-Diamond Bracelet 10 carat</h2>
                                                <p className="icon-card-price">7,800.00</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="icons-card">
                                            <div>
                                                <img src={icons1} className="img-fluid" />
                                            </div>
                                            <div className="product-deatil-wraper">
                                                <h2 className="icon-card-text">Tennis Lab-Diamond Bracelet 9 carat</h2>
                                                <p className="icon-card-price">6,800.00</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="icons-card">
                                            <div>
                                                <img src={icons1} className="img-fluid" />
                                            </div>
                                            <div className="product-deatil-wraper">
                                                <h2 className="icon-card-text">Tennis Lab-Diamond Bracelet 7 carat</h2>
                                                <p className="icon-card-price">4,800.00</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="icons-card">
                                            <div>
                                                <img src={icons1} className="img-fluid" />
                                            </div>
                                            <div className="product-deatil-wraper">
                                                <h2 className="icon-card-text">Tennis Lab-Diamond Bracelet 7 carat</h2>
                                                <p className="icon-card-price">4,800.00</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="icons-card">
                                            <div>
                                                <img src={icons1} className="img-fluid" />
                                            </div>
                                            <div className="product-deatil-wraper">
                                                <h2 className="icon-card-text">Tennis Lab-Diamond Bracelet 7 carat</h2>
                                                <p className="icon-card-price">4,800.00</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </section>

                    {/* Flairis Icons section */}
                    {/* <section className="mt-5">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 className="sub-headings-daimond">
                                        Flairis Icons
                                    </h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="icons-card">
                                        <div>
                                            <img src={icons1} className="img-fluid" />
                                        </div>
                                        <div className="product-deatil-wraper">
                                            <h2 className="icon-card-text">Tennis Lab-Diamond Bracelet 10 carat</h2>
                                            <p className="icon-card-price">7,800.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="icons-card">
                                        <div>
                                            <img src={icons1} className="img-fluid" />
                                        </div>
                                        <div className="product-deatil-wraper">
                                            <h2 className="icon-card-text">Tennis Lab-Diamond Bracelet 9 carat</h2>
                                            <p className="icon-card-price">6,800.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="icons-card">
                                        <div>
                                            <img src={icons1} className="img-fluid" />
                                        </div>
                                        <div className="product-deatil-wraper">
                                            <h2 className="icon-card-text">Tennis Lab-Diamond Bracelet 8 carat</h2>
                                            <p className="icon-card-price">5,800.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="icons-card">
                                        <div>
                                            <img src={icons1} className="img-fluid" />
                                        </div>
                                        <div className="product-deatil-wraper">
                                            <h2 className="icon-card-text">Tennis Lab-Diamond Bracelet 7 carat</h2>
                                            <p className="icon-card-price">4,800.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}



                    {/* Sparkling Promises section */}
                    <section className="sparkling-main-setion">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="sparkling-setion">
                                        <div className="text-center">
                                            <img src={sparkling} className="img-fluid sparkling-side-img " />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 discover-side">
                                    <h1 className="child-heading">Sparkling Promises</h1>
                                    <p className="child-para">Let your engagement ring sparkle with the promise of a lifetime together.</p>
                                    <div className="position-relative">
                                        <button className="child-btns">discover</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Touch of Glamour section */}
                    <section className="sparkling-main-setion">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-md-6 glamour-section-space">
                                    <h1 className="child-heading">A Touch of Glamour</h1>
                                    <p className="child-para">Add a touch of glamour to your ensemble with our exquisite rings and bracelets.</p>
                                    <div className="position-relative glamour-btn">
                                        <button className="child-btns">discover the set</button>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="sparkling-setion">
                                        <div className="glamour-img-side">
                                            <img src={glamour} className="img-fluid sparkling-side-img" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    {/* Gemstone Diamond section */}
                    <section className="gamestone-daimond-bg">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <h1 className="sub-headings-daimond gameston-head">Gemstone Diamond Collections</h1>
                                    <p className="child-para gameston-para">beautiful colors. excellent quality.</p>
                                    <div className="position-relative">
                                        <button className="gamestone-btns">discover more</button>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="gamestone-img-wrapper">
                                        <img src={gameston} className="gamestone-img img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Ring slider section */}
                    <section className="ring-slider-section sparkling-main-setion">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="slider-img-wrapper">
                                        <img src={sliderOne} className="img-fluid slider-ring-img" />
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="slider-ring-wrapper">
                                        <img src={sliderRing} className="img-fluid slider-ring-img" />
                                    </div>
                                    <p className="slider-ring-detail">Sandra Engagement Ring</p>
                                    <div className="slider-description-wrapper">
                                        <p className="slider-ring-description">4 Carat&nbsp;  · &nbsp; &nbsp; Pear Diamond ·&nbsp;&nbsp;  14 Karat White gold   </p>
                                    </div>
                                    <div className="position-relative slider-btn-wrapper ">
                                        <button className="child-btns">take a look</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* NewsLetter section  */}
                    <section className="newsletter-section">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12">
                                    <h2 className="sub-headings-daimond newsletter-head">
                                        Subscribe to our Newsletter
                                    </h2>
                                    <p className="newsletter-para">Discover the latest collections, news and exclusive launches from the House of Flairis:</p>

                                </div>
                                <div className="col-lg-6">
                                    <div className="subscribe-box">
                                        <input className="subcribe-input" placeholder="Email" type="email" />
                                        <button className="newsletter-btn">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>





                </div>
            </UserLayout>
        </div>
    );
}

export default Home;