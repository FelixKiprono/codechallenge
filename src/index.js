import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Search from "./pages/Search";
import View from "./pages/View";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="search" element={<Search />}/>
        <Route path="/view" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
