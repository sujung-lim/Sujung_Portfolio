import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

const AppContainer = styled.div`
  background-color: var(--back-color);
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Navbar />
      <Home />
      <Portfolio />
    </AppContainer>
  );
}

export default App;
