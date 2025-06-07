import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  useMediaQuery,
  IconButton,
  useTheme
} from '@mui/material';
import { 
  ArrowBackIos, 
  ArrowForwardIos,
  School,
  Star,
  Event,
  Person
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/system';

const slides = [
  {
    image: '/images/school-building.jpg',
    title: 'Delhi Public School',
    subtitle: 'Excellence in Education Since 1985',
    description: 'Nurturing young minds with holistic education and values for a brighter future'
  },
  {
    image: '/images/classroom.jpg',
    title: 'Modern Classrooms',
    subtitle: 'State-of-the-art Learning Environment',
    description: 'Our smart classrooms foster interactive and engaging learning experiences'
  },
  {
    image: '/images/lab.jpg',
    title: 'Advanced Laboratories',
    subtitle: 'Hands-on Scientific Exploration',
    description: 'Well-equipped labs for practical learning in sciences and technology'
  },
  {
    image: '/images/sports.jpg',
    title: 'Sports Facilities',
    subtitle: 'Developing Champions On and Off the Field',
    description: 'Comprehensive sports program to develop physical and mental strength'
  }
];

const HeroButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  fontSize: '1.1rem',
  fontWeight: 600,
  borderRadius: '50px',
  boxShadow: theme.shadows[6],
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: theme.shadows[8]
  }
}));

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Box id="home" sx={{
      height: '100vh',
      position: 'relative',
      overflow: 'hidden',
      pt: 8
    }}>
      {/* Background Slideshow */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slides[currentSlide].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        />
      </AnimatePresence>

      {/* Content */}
      <Box sx={{
        position: 'relative',
        zIndex: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: isMobile ? 2 : 10,
        color: 'white'
      }}>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <School sx={{ 
            fontSize: 80, 
            mb: 2,
            filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.5))'
          }} />
        </motion.div>

        <AnimatePresence mode='wait'>
          <motion.div
            key={`title-${currentSlide}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant={isMobile ? 'h3' : 'h2'} 
              gutterBottom
              sx={{
                fontWeight: 700,
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}
            >
              {slides[currentSlide].title}
            </Typography>
            <Typography 
              variant={isMobile ? 'h6' : 'h5'} 
              gutterBottom
              sx={{ 
                mb: 3,
                textShadow: '0 2px 6px rgba(0,0,0,0.5)'
              }}
            >
              {slides[currentSlide].subtitle}
            </Typography>
            <Typography 
              variant={isMobile ? 'body1' : 'h6'} 
              sx={{ 
                maxWidth: '800px',
                mb: 4,
                textShadow: '0 1px 4px rgba(0,0,0,0.5)'
              }}
            >
              {slides[currentSlide].description}
            </Typography>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Box sx={{ 
            display: 'flex', 
            gap: 2,
            flexDirection: isMobile ? 'column' : 'row'
          }}>
            <HeroButton 
              variant="contained" 
              color="secondary" 
              size="large"
              startIcon={<Person />}
            >
              Admissions
            </HeroButton>
            <HeroButton 
              variant="outlined" 
              color="inherit" 
              size="large"
              startIcon={<Star />}
              sx={{
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px'
                }
              }}
            >
              Learn More
            </HeroButton>
            <HeroButton 
              variant="outlined" 
              color="inherit" 
              size="large"
              startIcon={<Event />}
              sx={{
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px'
                }
              }}
            >
              Events
            </HeroButton>
          </Box>
        </motion.div>

        {/* Slide Indicators */}
        <Box sx={{
          position: 'absolute',
          bottom: '40px',
          display: 'flex',
          gap: 1
        }}>
          {slides.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentSlide(index)}
              sx={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                bgcolor: index === currentSlide ? 'secondary.main' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.2)'
                }
              }}
            />
          ))}
        </Box>

        {/* Navigation Arrows */}
        <IconButton
          onClick={prevSlide}
          sx={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.3)',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.5)'
            }
          }}
        >
          <ArrowBackIos />
        </IconButton>
        <IconButton
          onClick={nextSlide}
          sx={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.3)',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.5)'
            }
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Home;