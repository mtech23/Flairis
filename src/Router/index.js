import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Screen/Home";
import Detail from "../Screen/Detail";
import ProductDetail from "../Screen/ProductDetail";
function Router () {
    return (
        <div>
            <BrowserRouter basename="flairis">
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/detail" Component={Detail} />
                <Route path="/product-detail" Component={ProductDetail} />
            </Routes>
            
            </BrowserRouter>
        </div>
    );
}

export default Router;