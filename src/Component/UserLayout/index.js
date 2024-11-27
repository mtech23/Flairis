import React from "react";
import Footer from "../Footer";
import Header from "../Header";

function UserLayout(props) {
    return (
        <div>
            <Header />

            {props?.children}
            
            <Footer />
        </div>
    );
}
export default UserLayout;