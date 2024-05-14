import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './App'; // 将 App.js 重命名为 MainApp.js
import SearchPage from './Page/SearchPage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} /> {/* 使用 MainApp 而不是 App */}
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
