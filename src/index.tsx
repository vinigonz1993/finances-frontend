import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from './components/Main';
import Menu from './components/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Categories from './components/Categories';


function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/categories" element={<Categories/>} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Menu/>
  </React.StrictMode>
);
reportWebVitals();
