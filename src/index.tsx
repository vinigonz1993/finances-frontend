import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from './components/Main';
import Menu from './components/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Categories from './components/Categories';
import Container, { InnerContainer } from './components/Container';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Menu/>
      <Container>
        <InnerContainer>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/categories" element={<Categories/>} />
          </Routes>
        </InnerContainer>
      </Container>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
