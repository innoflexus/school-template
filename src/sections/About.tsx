import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  useMediaQuery,
  Grid,
  useTheme
} from '@mui/material';
import { History, School, Groups, EmojiEvents } from '@mui/icons-material';
import { motion } from 'framer-motion';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const About: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const features: FeatureItem[] = [
    {
      icon: <History fontSize="large" />,
      title: 'Our History',
      text: 'Founded in 1985, our school has empowered generations through quality education for all sections of society.',
    },
    {
      icon: <School fontSize="large" />,
      title: 'Our Mission',
      text: 'To nurture young minds with holistic education, instilling curiosity, character, and compassion.',
    },
    {
      icon: <Groups fontSize="large" />,
      title: 'Our Community',
      text: '3000+ students, 150+ faculty, active parent bodies, and a strong, global alumni network.',
    },
    {
      icon: <EmojiEvents fontSize="large" />,
      title: 'Achievements',
      text: '100% board results, national-level awards in science, arts, sports, and social impact.',
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        minHeight: '100vh',
        py: 10,
        px: isMobile ? 2 : 12,
        background: 'linear-gradient(to bottom right, #f3f4f6, #e0f7fa)',
      }}
    >
      <Typography
        variant="h3"
        textAlign="center"
        gutterBottom
        sx={{
          fontWeight: 700,
          background: 'linear-gradient(90deg, #3f51b5, #00bcd4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        About Our School
      </Typography>

      <Typography
        variant="h6"
        textAlign="center"
        color="text.secondary"
        mb={8}
        sx={{ maxWidth: 600, mx: 'auto' }}
      >
        A Legacy of Excellence and Innovation in Education
      </Typography>

      <Grid container spacing={5}>
        {features.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  py: 4,
                  px: 2,
                  borderRadius: 4,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease-in-out',
                  background: '#ffffff',
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    width: 64,
                    height: 64,
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  {item.icon}
                </Avatar>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;
