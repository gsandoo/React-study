import React from "react";
import Header from "./Header";
import {Link} from 'react-router-dom'

function About(){
    return(
        <>
            <div id="about_header">
                <div>
                    <Header/>
                </div>
            </div>
            <div id="about_main">
                <div id="left_pic">
                    <img src="https://ecudemo184661.cafe24.com/add/images/bnnMain02.jpg" alt="face_img" />
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
                        <div>
                            <div className="change_color">&larr;</div> {/*왼쪽 화살표 */}
                            <div className="change_color">1/2</div>
                            <div className="change_color">&#8594;</div> {/*오른쪽 화살표 */}
                        </div>
                    </div>
                </div>
                <div id="right_pic">
                    <img src="https://ecudemo184661.cafe24.com/add/images/bnnMain04.jpg" alt="earrings_img" />
                </div>
            </div>
        </>
        
    );
};

export default About;

