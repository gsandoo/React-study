import React from "react";
// import styled from "styled-components";


// const HeaderBlock = styled.div`
//     background : gray;
//     display:flex;
//     justify-content: center;
//     align-items: center;
//     display: fixed;
//     `;

// const HeaderImage = styled.img`
// width: 20px;
// height: 20px;
// padding: 15px 0 10px 0;
// margin-right: 20px;
// &:hover {
//     cursor: pointer;
// }
// `

function Header(){
    return(
        <div id="header" className="flex">
            <img src="http://img.echosting.cafe24.com/api/store/images/ico_frame_desktop.png" alt="header_image_1"/>
            <img src="http://img.echosting.cafe24.com/api/store/images/ico_frame_mobile.png" alt="header_image_2"/>
        </div>
);
}

export default Header;

