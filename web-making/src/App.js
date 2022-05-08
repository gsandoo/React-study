import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import  Menu from './components/Menu';
import Slide from './components/Slide';
import Items from './components/Items';
import './App.css';
import './test.css';



function App() {
  const GlobalStyle = createGlobalStyle`
  body{
    background: white;
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  `;
  return (
    <>
    <GlobalStyle/>
    <Header/>
    <Menu/>
    <Slide/>
    <Items/>
    </>
  );
}

export default App;
