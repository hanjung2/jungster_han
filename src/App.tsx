import './App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage'
import AboutMePage from './pages/AboutMePage';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<App />} /> */}
          <Route path="/about_me" element={<AboutMePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
