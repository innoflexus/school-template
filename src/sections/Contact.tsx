import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { LocationOn, Phone, Email, Send } from '@mui/icons-material';

const Contact: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Message sent! (This is a placeholder alert)');
  };

  return (
    <Box id="contact" sx={{ minHeight: '100vh', py: 8, px: isMobile ? 2 : 10 }}>
      <Typography variant="h3" textAlign="center" gutterBottom>
        Contact Us
      </Typography>

      <Grid container spacing={6} sx={{ mt: 4 }}>
        {/* Contact Information Column */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <LocationOn color="primary" sx={{ mr: 2, fontSize: 30 }} />
            <Typography variant="h6" component="address">
              123 School Road, Delhi 110001, India
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Phone color="primary" sx={{ mr: 2, fontSize: 30 }} />
            <Typography variant="h6" component="a" href="tel:+911123456789">
              +91 11 2345 6789
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Email color="primary" sx={{ mr: 2, fontSize: 30 }} />
            <Typography variant="h6" component="a" href="mailto:info@dpsdelhi.edu.in">
              info@dpsdelhi.edu.in
            </Typography>
          </Box>

          <iframe
            title="School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.837354882553!2d77.2098657150816!3d28.56688898243993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2a99b6f9fa7%3A0x83a25e55f0af54c!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1624964400000!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0, marginTop: 20 }}
            allowFullScreen
            loading="lazy"
            aria-label="School location on Google Maps"
          />
        </Grid>

        {/* Contact Form Column */}
        <Grid item xs={12} md={6}>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              fullWidth
              label="Name"
              margin="normal"
              required
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              margin="normal"
              required
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Phone"
              type="tel"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              margin="normal"
              required
              variant="outlined"
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              endIcon={<Send />}
              sx={{ mt: 2 }}
              fullWidth
            >
              Send Message
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;