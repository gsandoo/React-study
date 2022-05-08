import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import practiceApp from './practiceApp'
// import Counter from './Counter.js'
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />  {/*App.js 를 내보낸다*/}
  </React.StrictMode>,
  document.getElementById('root') /*id가 root 인 것을 찾는다*/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
