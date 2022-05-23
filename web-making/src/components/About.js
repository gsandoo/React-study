import React, {useState} from "react";
import Header from "./Header";
import {Link} from 'react-router-dom'
import Slider from "./Slider";


function About(){
    const [darkmode , setLightMode] = useState(false);
    const [number , setNumber] = useState (false);
    
    

    
    return(
        <>
            <div id="about_header">
                <div>
                    <Header/>
                </div>
            </div>
            <div id="about_main">
                <div id="left_pic">
                    <img 
                    className={darkmode ?"left_pic_change" :"left_pic_gray"}
                    src={darkmode ?"https://ecudemo184661.cafe24.com/add/images/bnnMain02.jpg" : "https://ecudemo184661.cafe24.com/add/images/bnnMain01.jpg"}
                    alt={darkmode ?"color" : "gray"}
                    />
                </div> 
                <div id="paragraph">
                    <div className="description">
                        <h3>
                        New season 2022 <br/>
                        collection<br/>
                        Handmade <br/>
                        Accessories
                        </h3>
                        <p>A special way to spend each day moody and <br/>
                        chic.<br/>
                        Even if you do not decorate, it is a skin with<br/>
                        a special atmosphere.
                        </p>
                        <div className="viewmore">
                            <Link to='/About'>view more</Link>
                        </div>
                        <div className="flex">
                        <div className="arrow" onClick={()=>setLightMode(prevMode => ! prevMode)}>&#8592;</div> {/*왼쪽 화살표 */}
                            &nbsp;
                            &nbsp;
                            <div className="pages_num">
                                <div className={number ?"pages_visible" :"pages"}>{number ? "2/2" :"1/2"}</div>
                            </div>
                            &nbsp;
                            &nbsp;
                            <div className="arrow" onClick={()=>{setLightMode(prevMode => ! prevMode); setNumber(prevNumber => !prevNumber)}}>&#8594;</div> {/*오른쪽 화살표 */}
                        </div>
                    </div>
                </div>
                <div id="right_pic">
                    <img 
                        className={darkmode ?"right_pic_change" :"right_pic_gray"}
                        src={darkmode ?"https://ecudemo184661.cafe24.com/add/images/bnnMain04.jpg" : "https://ecudemo184661.cafe24.com/add/images/bnnMain03.jpg"}
                        alt={darkmode ?"color" : "gray"}
                    />
                </div>
            </div>
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

