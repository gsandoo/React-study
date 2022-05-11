import React from "react";
import {Link} from 'react-router-dom'

function Header(){
    return(
        <div id="top_fixed">
            <div id="header" className="flex">
                <img src="http://img.echosting.cafe24.com/api/store/images/ico_frame_desktop.png" alt="header_image_1"/>
                <img src="http://img.echosting.cafe24.com/api/store/images/ico_frame_mobile.png" alt="header_image_2"/>
            </div>
            <div id="navigation">
                <div className="tab_left">
                    <div className="home">
                        <Link to='/'>HOME</Link>
                    </div>
                </div>
                <div className="tab_right">
                    <div className="menu">
                        <Link to='/About'>ABOUT</Link>
                    </div>
                    <div className="menu">
                        <Link to='/Items'>ITEMS</Link>
                    </div>
                    <div className="menu">
                        <Link to='/Account'>ACCOUNT</Link>
                    </div>
                    <div className="menu">
                        <Link to='/Contact'>CONTACT</Link>
                    </div>
                </div>
            </div>   
        </div>
        
);
}

export default Header;

