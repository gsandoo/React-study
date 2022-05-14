import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Route } from 'react-router-dom';
import './App.css';
import './css folder/home.css';
import './css folder/about.css';
import './css folder/items.css';
import Home from './components/Home';
import About from './components/About';
import Items from './components/Items';


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
    <Route path='/' exact component={Home} />
    <Route path='/About' component={About}/>
    <Route path='/Items' component={Items}/>
    </>
  );
}

export default App;
