import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Home from './sections/Home';
import About from './sections/About';
import Academics from './sections/Academics';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';

const theme = createTheme({
  palette: {
    primary: { main: '#1a237e' },
    secondary: { main: '#ff6f00' },
    background: { default: '#f5f5f5' },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Home />
      <About />
      <Academics />
      <Gallery />
      <Contact />
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;
