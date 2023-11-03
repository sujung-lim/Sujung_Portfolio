import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { GlobalStyles } from './styles/GlobalStyles';

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
    </AppContainer>
  );
}

export default App;
