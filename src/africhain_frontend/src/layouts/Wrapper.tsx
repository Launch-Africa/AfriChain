"use client";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
// import { animationCreate } from "../utils/utils";
import ScrollToTop from "../component/common/ScrollToTop";
// import "bootstrap/dist/css/bootstrap.min.css"; 



const Wrapper = ({ children }: any) => {
    useEffect(() => {
        // animation
        const timer = setTimeout(() => {
            // animationCreate(); //TODO: UNCOMMENT THIS LINE and fix the error
        }, 100);

        return () => clearTimeout(timer);
    }, []);


    return <>
        {children}
        <ScrollToTop />
        <ToastContainer position="top-center" />
    </>;
}

export default Wrapper
