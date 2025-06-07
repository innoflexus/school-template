import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Avatar,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  ExpandMore,
  School,
  Science,
  Calculate,
  MenuBook,
  People,
  LibraryBooks,
  Computer,
  Sports
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: '12px',
  boxShadow: theme.shadows[4],
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8]
  },
  '&:before': {
    display: 'none'
  }
}));

const AnimatedBox = motion(Box);

const Academics = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const programs = [
    {
      icon: <School fontSize="large" />,
      title: 'Primary School (I-V)',
      description:
        'Our primary program focuses on foundational learning with an emphasis on literacy, numeracy, and creative expression through our innovative STEAM curriculum.',
      highlights: [
        'Interactive digital classrooms',
        'Specialized reading programs',
        'Creative arts integration',
        'Physical education and yoga'
      ]
    },
    {
      icon: <Calculate fontSize="large" />,
      title: 'Middle School (VI-VIII)',
      description:
        'We transition students to subject-focused learning with our unique interdisciplinary approach that connects sciences, humanities, and arts.',
      highlights: [
        'Project-based learning',
        'Introduction to coding',
        'Science lab explorations',
        'Language immersion programs'
      ]
    },
    {
      icon: <Science fontSize="large" />,
      title: 'Secondary School (IX-X)',
      description:
        'Preparation for board exams with specialized tracks in STEM and humanities, complemented by our award-winning career guidance program.',
      highlights: [
        'Advanced science labs',
        'Competitive exam preparation',
        'Research opportunities',
        'Leadership development'
      ]
    },
    {
      icon: <MenuBook fontSize="large" />,
      title: 'Senior Secondary (XI-XII)',
      description:
        'Specialization in Science, Commerce, or Arts streams with university preparation and industry exposure programs.',
      highlights: [
        'University counseling',
        'Internship opportunities',
        'Advanced placement courses',
        'Entrepreneurship programs'
      ]
    }
  ];

  const facilities = [
    { icon: <LibraryBooks />, name: 'Digital Library' },
    { icon: <Computer />, name: 'Computer Labs' },
    { icon: <Science />, name: 'Science Labs' },
    { icon: <People />, name: 'Counseling Center' },
    { icon: <Sports />, name: 'Sports Complex' }
  ];

  return (
    <Box
      id="academics"
      sx={{
        minHeight: '100vh',
        py: 8,
        px: isMobile ? 2 : 6,
        background: 'linear-gradient(to bottom, #f5f7fa 0%, #e4e8ed 100%)'
      }}
    >
      <AnimatedBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{ textAlign: 'center', mb: 6 }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: theme.palette.primary.main,
            mb: 2
          }}
        >
          Academic Programs
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: 800, mx: 'auto' }}
        >
          Nurturing excellence through innovative learning pathways
        </Typography>
      </AnimatedBox>

      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        {programs.map((program, index) => (
          <AnimatedBox
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <StyledAccordion>
              <AccordionSummary
                expandIcon={<ExpandMore color="primary" />}
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: '12px',
                  minHeight: 80
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Avatar
                    sx={{
                      bgcolor: theme.palette.primary.light,
                      width: 56,
                      height: 56
                    }}
                  >
                    {program.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      {program.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Click to learn more
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: theme.palette.background.default,
                  borderBottomLeftRadius: '12px',
                  borderBottomRightRadius: '12px'
                }}
              >
                <Typography variant="body1" paragraph>
                  {program.description}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Program Highlights:
                </Typography>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  {program.highlights.map((highlight, i) => (
                    <Grid item xs={12} sm={6} key={i}>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                      >
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                            mt: '2px'
                          }}
                        />
                        <Typography variant="body1">{highlight}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </StyledAccordion>
          </AnimatedBox>
        ))}
      </Box>

      <AnimatedBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        sx={{
          mt: 8,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          borderRadius: '16px',
          p: 4,
          maxWidth: 1200,
          mx: 'auto'
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          gutterBottom
          sx={{ fontWeight: 600 }}
        >
          Our World-Class Facilities
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {facilities.map((facility, index) => (
            <Grid item xs={6} sm={4} md={2.4} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: theme.palette.background.paper,
                    color: theme.palette.primary.main,
                    width: 60,
                    height: 60,
                    mb: 1.5
                  }}
                >
                  {facility.icon}
                </Avatar>
                <Typography variant="subtitle1">{facility.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </AnimatedBox>
    </Box>
  );
};

export default Academics;
