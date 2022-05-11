import React , {useState} from "react";
import Header from "./Header";
import {Link} from 'react-router-dom'


function About(){
    // const [state,setState] =useState(false);
    // const colorChange = ()=>{
    //     if(state===false){
    //         setState(true)
    //     }else{
    //         setState(false);
    //     }
    // };
    
    

    return(
        <>
            <div id="about_header">
                <div>
                    <Header/>
                </div>
            </div>
            <div id="about_main">
                <div id="left_pic">
                    <img className="left_pic_gray" src="https://ecudemo184661.cafe24.com/add/images/bnnMain02.jpg" alt="face_img" />
                    <img className="left_pic_change" src="https://ecudemo184661.cafe24.com/add/images/bnnMain01.jpg" alt="face_color_img" />
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
                            <div className="arrow">&larr;</div> {/*왼쪽 화살표 */}
                            &nbsp;
                            &nbsp;
                            <div className="pages_num">
                                <div className="pages">1/2</div>
                                <div className="pages_visible">2/2</div>
                            </div>
                            &nbsp;
                            &nbsp;
                            <div className="arrow">&#8594;</div> {/*오른쪽 화살표 */}
                        </div>
                    </div>
                </div>
                <div id="right_pic">
                    <img className="right_pic_gray" src="https://ecudemo184661.cafe24.com/add/images/bnnMain04.jpg" alt="earrings_img" />
                    <img className="right_pic_change" src="https://ecudemo184661.cafe24.com/add/images/bnnMain03.jpg" alt="earrings_color_img" />
                </div>
            </div>
        </>
        
    );
};

export default About;

