import React from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';

const AppContainer = styled.div`
  background-color: var(--back-color);
  min-height: 100vh;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
