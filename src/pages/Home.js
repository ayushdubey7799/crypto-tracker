import React from "react";
import Header from "../components/Common/Header";
import MainComponent from "../components/LandingPage/MainComponent";
import BackToTop from "../components/Common/BackToTop";

function Home(){
    // window.onscroll = () => "";

    return(
        <div>
            <Header/>
            <MainComponent/>
            <BackToTop/>
        </div>
    )
}

export default Home;