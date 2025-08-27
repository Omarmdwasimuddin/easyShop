import React from 'react';
import AppNavBar from "@/components/master/AppNavBar";
import Footer from "@/components/master/Footer";
import {Toaster} from "react-hot-toast";
import {isLogin} from "@/utility/CookieHelper";



const Master = async (props) => {
    let Login= await isLogin()

    return (
        <>
            <AppNavBar isLogin={Login}/>
            {props.children}
            <Toaster position="bottom-center"/>
            <Footer/>
        </>
    );
};

export default Master;