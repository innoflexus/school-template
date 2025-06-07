import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
  Container,
  Avatar,
  Slide,
  useScrollTrigger,
  Badge,
  Typography
} from '@mui/material';
import {
  School,
  Info,
  Book,
  Photo,
  Mail,
  Menu,
  Home,
  Notifications,
  Event,
  Login
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import MobileMenu from './MobileMenu'; // Ensure this file exists with correct props

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(26,35,126,0.95) 0%, rgba(42,53,162,0.95) 100%)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 500,
  fontSize: '1rem',
  textTransform: 'capitalize',
  padding: theme.spacing(1, 2),
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.1)',
    transform: 'translateY(-2px)'
  },
  '& .MuiButton-startIcon': {
    transition: 'all 0.3s ease',
  },
  '&:hover .MuiButton-startIcon': {
    transform: 'scale(1.2)'
  }
}));

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  useEffect(() => {
    setScrolled(trigger);
  }, [trigger]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home /> },
    { id: 'about', label: 'About', icon: <Info /> },
    { id: 'academics', label: 'Academics', icon: <Book /> },
    { id: 'gallery', label: 'Gallery', icon: <Photo /> },
    { id: 'contact', label: 'Contact', icon: <Mail /> }
  ];

  return (
    <Slide appear={false} direction="down" in={!scrolled}>
      <StyledAppBar position="fixed" elevation={scrolled ? 4 : 0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo & Title */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mr: 3,
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.05)' },
                transition: 'transform 0.3s ease'
              }}
              onClick={() => scrollTo('home')}
            >
              <Avatar
                src="/logo.png"
                alt="School Logo"
                sx={{
                  width: 48,
                  height: 48,
                  mr: 1,
                  bgcolor: theme.palette.secondary.main
                }}
              >
                <School fontSize="large" />
              </Avatar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(90deg, #fff 0%, #ffeb3b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: { xs: 'none', md: 'block' }
                }}
              >
                Delhi Public School
              </Typography>
            </Box>

            {isMobile ? (
              <>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={() => setMobileOpen(true)}
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.2)'
                    }
                  }}
                >
                  <Menu />
                </IconButton>
                <MobileMenu
                  open={mobileOpen}
                  onClose={() => setMobileOpen(false)}
                  scrollTo={scrollTo}
                  navItems={navItems}
                />
              </>
            ) : (
              <>
                <Box sx={{ display: 'flex', gap: 1, ml: 3, flexGrow: 1 }}>
                  {navItems.map((item) => (
                    <motion.div key={item.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <NavButton startIcon={item.icon} onClick={() => scrollTo(item.id)}>
                        {item.label}
                      </NavButton>
                    </motion.div>
                  ))}
                </Box>

                <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
                  <IconButton color="inherit">
                    <Badge badgeContent={3} color="secondary">
                      <Notifications />
                    </Badge>
                  </IconButton>
                  <IconButton color="inherit">
                    <Event />
                  </IconButton>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<Login />}
                    sx={{
                      ml: 1,
                      borderRadius: '8px',
                      fontWeight: 600,
                      boxShadow: '0 4px 12px rgba(255,111,0,0.3)',
                      '&:hover': {
                        boxShadow: '0 6px 16px rgba(255,111,0,0.4)'
                      }
                    }}
                  >
                    ERP Login
                  </Button>
                </Box>
              </>
            )}
          </Toolbar>
        </Container>
      </StyledAppBar>
    </Slide>
  );
};

export default Header;
