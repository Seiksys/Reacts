import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './App'; // 将 App.js 重命名为 MainApp.js
import SearchPage from './Page/SearchPage';
import SearchTime from './Page/SearchTime';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext'; // 引入 UserProvider

ReactDOM.render(
  <React.StrictMode>
    <UserProvider> {/* 将 UserProvider 包裹在 Router 外面 */}
      <Router>
        <Routes>
          <Route path="/" element={<MainApp />} /> {/* 使用 MainApp 而不是 App */}
          <Route path="/search" element={<SearchPage />} />
          <Route path="/time" element={<SearchTime />} />
        </Routes>
      </Router>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
