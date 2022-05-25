import React,{useState}from "react";
import {Link} from 'react-router-dom'
import styled,{createGlobalStyle} from 'styled-components';

function AboutMainSlide(){
    const [darkmode , setLightMode] = useState(false);
    const [number , setNumber] = useState (false);



    return(
        <>
        <GlobalStyle/>
            <AboutMain>
                    <LeftPic>
                        <img
                        className={darkmode ?"left_pic_change" :"left_pic_gray"}
                        src={darkmode ?"https://ecudemo184661.cafe24.com/add/images/bnnMain02.jpg" : "https://ecudemo184661.cafe24.com/add/images/bnnMain01.jpg"}
                        alt={darkmode ?"color" : "gray"}
                        />
                    </LeftPic>
                    <Paragraph>
                        <div className="description">
                            <Lines>
                            New season 2022 <br/>
                            collection<br/>
                            Handmade <br/>
                            Accessories
                            </Lines>
                            <P>A special way to spend each day moody and <br/>
                            chic.<br/>
                            Even if you do not decorate, it is a skin with<br/>
                            a special atmosphere.
                            </P>
                            <ViewMore>
                                <StyledLink to='/About'>view more</StyledLink>
                            </ViewMore>
                            <ChangePages>
                                <Arrow onClick={()=>{setLightMode(prevMode => ! prevMode); setNumber(prevNumber => !prevNumber)}}>&#8592;</Arrow> {/*왼쪽 화살표 */}
                                &nbsp;
                                &nbsp;
                                <div className="pages_num">
                                    <div className={number ?"pages_visible" :"pages"}>{number ? "2/2" :"1/2"}</div>
                                </div>
                                &nbsp;
                                &nbsp;
                                <Arrow onClick={()=>{setLightMode(prevMode => ! prevMode); setNumber(prevNumber => !prevNumber)}}>&#8594;</Arrow> {/*오른쪽 화살표 */}
                            </ChangePages>
                        </div>
                    </Paragraph>
                    <div id="right_pic">
                        <img
                            className={darkmode ?"right_pic_change" :"right_pic_gray"}
                            src={darkmode ?"https://ecudemo184661.cafe24.com/add/images/bnnMain04.jpg" : "https://ecudemo184661.cafe24.com/add/images/bnnMain03.jpg"}
                            alt={darkmode ?"color" : "gray"}
                        />
                    </div>
                </AboutMain>
            </>
    );
};

const GlobalStyle = createGlobalStyle`
body{
    @import url('https://fonts.googleapis.com/css2?family=Cardo:ital@1&family=Roboto&display=swap');
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`


const AboutMain = styled.div`
    width: 100%;
    max-height: auto;
    display: flex;
    position: absolute;
    top: 20%;
    padding: 0 5% 0 5%;
    `;

const LeftPic = styled.div`
    width: 30%;
`

const Paragraph = styled.div`
width: 40%;
text-align: center;
padding-top: 5% ;
`
const Lines  =styled.h3`

    font-size: 35px;
    font-weight: 700;
    font-family: 'Cardo', serif;
    margin-bottom: 30px;
    line-height: 1.5;
    letter-spacing: 0.5px;

`
const P = styled.p`
font-size: 12px;
    color: #999;
    letter-spacing: 1px;
    line-height: 1.5;
    margin-bottom: 60px;
`

const ViewMore = styled.div`
width: 90px;
transition: 0.6s;
padding: 0 5px 4px 5px;
display: inline-block;
border-bottom: 1px solid gray;
margin-bottom: 10%;
&:hover{
    width: 130px;
    transition:all 0.6s;  
}   
`

const StyledLink = styled(Link)`
text-decoration: none;
    color: #9999;
    font-style: italic;
`

const ChangePages = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
`

const Arrow = styled.div`
font-size: 3em;
cursor: pointer;
margin: 0 10% 0 10%;
`
export default AboutMainSlide;

