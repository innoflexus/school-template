import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Home as HomeIcon, Info, Book, Photo, Mail } from '@mui/icons-material';

import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Home from './sections/Home';
import About from './sections/About';
import Academics from './sections/Academics';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';

// Define the NavItem type to keep consistency
interface NavItem {
  id: string;
  text: string;
  icon: React.ReactNode;
}

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

const navItems: NavItem[] = [
  { id: 'home', text: 'Home', icon: <HomeIcon /> },
  { id: 'about', text: 'About', icon: <Info /> },
  { id: 'courses', text: 'Courses', icon: <Book /> },
  { id: 'gallery', text: 'Gallery', icon: <Photo /> },
  { id: 'contact', text: 'Contact', icon: <Mail /> },
];

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header navItems={navItems} /> {/* Pass navItems as props */}
      <Home />
      <About />
      <Academics />
      <Gallery />
      <Contact />
      <ScrollToTop />
    </ThemeProvider>
  );
};

export default App;
