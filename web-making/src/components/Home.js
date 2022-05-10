import React from "react";
import Header from "./Header";
import Menu from './Menu';
import Slide from './Slide';
import Items from './Items';

function Home(){
    return(
    <>
        <Header/>
        <Menu/>
        <Slide/>
        <Items/>
    </>
    );
};

export default Home;