import React,{useEffect, useState} from "react";
import Header from "../components/Common/Header";
import MainComponent from "../components/LandingPage/MainComponent";
import BackToTop from "../components/Common/BackToTop";
import Footer from "../components/Common/Footer";
function Home(){
    // window.onscroll = () => "";

  

    return(
        <div>
            <Header/>
            <MainComponent/>
            <BackToTop/>
            <Footer/>
        </div>
    )
}

export default Home;