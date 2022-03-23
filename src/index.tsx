import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
// Pages 
import AboutMePage from './pages/AboutMePage';
import App from './App';
// Web Vitals
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
     <h1>Han Jung personal website and portfolio</h1>
    <App />
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about_me" element={<AboutMePage />} />
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
