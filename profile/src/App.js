import React from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Footer from './components/Footer';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
