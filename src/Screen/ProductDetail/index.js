import React from "react";
import { useState } from "react";
import UserLayout from "../../Component/UserLayout";
import CustomSelect from "../../Component/CustomSelect";
import Banner from "../../Component/Banner";
import "./style.css";
import ReactImageMagnify from 'react-image-magnify';
import productone from "../../Assets/images/productone.png"
import productImg from "../../Assets/images/productImg.webp"
import bb from "../../Assets/images/bb.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import icons1 from "../../Assets/images/icon1.jpg"

function ProductDetail() {
    const [isHovered, setIsHovered] = useState(false); // Track if the image is hovered or touched
    let [count, setCount] = useState(0)

    // Handle mouse move for desktop
    const handleMouseMove = (e) => {
        setIsHovered(true); // Show the zoom lens
    };

    // Handle touch move for mobile/tablet
    const handleTouchMove = (e) => {
        setIsHovered(true); // Show the zoom lens
    };

    // Handle mouse leave (reset zoom lens on mouse out)
    const handleMouseLeave = () => {
        setIsHovered(false); // Hide the zoom lens
    };

    // Handle touch end for mobile/tablet (reset zoom lens)
    const handleTouchEnd = () => {
        setIsHovered(false); // Hide the zoom lens
    };
    // const options = [
    //     { value: 'option-1', Option: '18k' },
    //     {value: 'option-2', Option: '14k' },
    //     { value: 'option-3', Option: 'Platinum' },
    //   ];
    function incrementCount() {
        count = count + 1;
        setCount(count);
    }
    function decrementCount() {
        count = count - 1;
        setCount(count);
    }

    return (
        <div>
            <UserLayout>

                <Banner
                    custombannerBg="products-banner"
                    name="Our Products"
                    daimonImg={productone}
                />

                <div className="deatil-page-bg">
                    <section className="our-products-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src={productImg} className="img-fluid our-products-img" />
                                    <div className="our-product-gallery">
                                        <img src={bb} className="img-fluid gallery-img" />
                                    </div>
                                    <div className="mt-4">
                                        <button className="product-detail-btn">Read More</button>
                                    </div>
                                    {/* <div style={{ position: 'relative', width: '100%', height: 'auto' }}
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                    onTouchMove={handleTouchMove}
                                    onTouchEnd={handleTouchEnd}
                                    >
                                    
                                    <ReactImageMagnify
                                        {...{
                                            smallImage: {
                                                alt: 'Wristwatch by Versace',
                                                isFluidWidth: true,
                                                src: productImg,
                                                sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px',
                                            },
                                            largeImage: {
                                                src: productImg,
                                                width: 1426,
                                                height: 2000,
                                            },
                                            lensStyle: { backgroundColor: 'rgba(0, 0, 0, 0.6)' },
                                            imageStyle: {
                                                objectFit: 'contain',
                                            },
                                            enlargedImageContainerStyle: {
                                                zIndex: 9,
                                                position: 'absolute', // Ensure the enlarged image is positioned correctly
                                                top: 0,
                                                left: 0,
                                            },
                                            enlargedImageStyle: {
                                                objectFit: 'contain',
                                            },
                                            isHintEnabled: isHovered, // Show the magnifier only when hovered or touched
                                            shouldHideHintAfterFirstActivation: true,
                                        }}
                                    />
                                    </div> */}
                                </div>
                                <div className="col-lg-6">
                                    <h1 className="our-product-title">Flower Diamond Pendant 1.5 ctw</h1>
                                    <p className="our-product-description">This stunning Flower Pendant showcases 1.5 carat of lab-grown diamonds with exceptional E color and VVS1 clarity, radiating brilliance and beauty. The intricately crafted floral design features meticulously set diamonds that capture the essence of nature’s elegance. Available in white, yellow, or rose gold, as well as platinum, this exquisite pendant is a perfect blend of luxury and sophistication, making it a timeless piece for any occasion. Perfectly matched with the Flower Earrings, this pendant creates a cohesive, luxurious set.</p>
                                    <div>
                                        <h6 className="our-product-color">Color: <span>White</span></h6>
                                    </div>
                                    <div className="color-list-div">
                                        <button className="color-boxes-wrapper">
                                            <div className="color-boxes"></div>
                                        </button>
                                        <button className="color-boxes-wrapper">
                                            <div className="color-boxes color-boxes-one"></div>
                                        </button>
                                        <button className="color-boxes-wrapper">
                                            <div className="color-boxes color-boxes-two"></div>
                                        </button>
                                    </div>
                                    <div className="mt-5 mb-5">
                                        <label for="standard-select" className="standard-select-label">Metal Type</label>
                                        <div className="select">
                                            <select id="standard-select" className="custom-select-box">
                                                <option value="Option 1">14k</option>
                                                <option value="Option 2">18k</option>
                                                <option value="Option 3">Platinum</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="our-product-price">$3,000.00</p>
                                    </div>
                                    <div className="cart-btn-wrapper">
                                        <div className="add-cart-btn-wrapper">
                                            <button onClick={incrementCount} className="counter-btns" >+</button>
                                            <div>{count}</div>
                                            <button onClick={decrementCount} className="counter-btns">-</button>
                                        </div>
                                        <button className="add-to-cart-btn-main">
                                            <FontAwesomeIcon icon={faCartShopping} />
                                            &nbsp;
                                            Add To Cart
                                        </button>
                                    </div>

                                    <div className="mt-5">
                                        <h5 className=""><a href="#" className="product-check-btn">Click here</a> <span className="product-name-link">to check layaway or deposits options.</span></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-lg-12">
                                    <h2 className="like-product-head">You May Also Like</h2>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
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
                                    <div className="col-lg-4 col-md-6">
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
                                    <div className="col-lg-4 col-md-6">
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
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </UserLayout>

        </div>
    )
};

export default ProductDetail;