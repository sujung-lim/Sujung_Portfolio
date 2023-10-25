import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
// import Footer from './components/Footer';
import { GlobalStyles } from './styles/GlobalStyles';

const AppContainer = styled.div`
  background-color: var(--back-color);
  height: 100%;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Navbar />
      <Profile />
      {/* <Footer /> */}
    </AppContainer>
  );
}

export default App;
