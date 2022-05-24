import React from "react";
import AboutMainSlide from "./AboutMainSlide";
import Header from "./Header";
import Slider from "./Slider";





function About(){    
    return(
        <>
            <div id="about_header">
                <Header/>
            </div>
            <AboutMainSlide/>
            <Slider/>              
            <div id="items_def">
                <div className="sample">
                    <div className="product">SAMPLE PRODUCT</div>
                    <div className="price">*KRW 85,000</div>
                </div>
                <div className="sample">
                    <div className="product">SAMPLE PRODUCT</div>
                    <div className="price">*KRW 85,000</div>
                </div>
                <div className="sample">
                    <div className="product">SAMPLE PRODUCT</div>
                    <div className="price">*KRW 85,000</div>
                </div>
                <div className="sample">
                    <div className="product">SAMPLE PRODUCT</div>
                    <div className="price">*KRW 85,000</div>
                </div>
            </div>
        </>
        
    );
};

export default About;

