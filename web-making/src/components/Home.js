import React from "react";
import Header from "./Header";
import Menu from './Menu';
import Slide from './Slide';
import ItemsList from "./ItemsList";

function Home(){
    return(
    <>
        <Header/>
        <Menu/>
        <Slide/>
        <ItemsList/>
    </>
    );
};

export default Home;