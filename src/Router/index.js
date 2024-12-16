import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Screen/Home";
import Listing from "../Screen/Listing";
import ProductDetail from "../Screen/ProductDetail";
import CustomDesign from "../Screen/CustomDesign";
function Router () {
    return (
        <>
            <BrowserRouter basename="/flairis">
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/listing" Component={Listing} />
                <Route path="/product-detail" Component={ProductDetail} />
                <Route path="/custom-design" Component={CustomDesign} />
            </Routes>
            
            </BrowserRouter>
        </>
    );
}

export default Router;