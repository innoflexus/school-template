import { Box, Typography, ImageList, ImageListItem, useMediaQuery } from '@mui/material';
import { Theme } from '@mui/material/styles';

const Gallery = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const galleryImages = [
    { img: 'gallery1.jpg', title: 'Annual Day' },
    { img: 'gallery2.jpg', title: 'Science Fair' },
    { img: 'gallery3.jpg', title: 'Sports Day' },
    { img: 'gallery4.jpg', title: 'Classroom' },
    { img: 'gallery5.jpg', title: 'Library' },
    { img: 'gallery6.jpg', title: 'Computer Lab' }
  ];

  return (
    <Box id="gallery" sx={{ minHeight: '100vh', py: 8, px: 2 }}>
      <Typography variant="h3" textAlign="center" gutterBottom>
        Gallery
      </Typography>
      <Typography variant="h6" textAlign="center" color="text.secondary" mb={6}>
        Moments from Our School
      </Typography>
      
      <ImageList cols={isMobile ? 1 : isTablet ? 2 : 3} gap={16}>
        {galleryImages.map((item) => (
          <ImageListItem key={item.img} sx={{ position: 'relative' }}>
            <img
              src={`/images/${item.img}`}
              alt={item.title}
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
            <Typography 
              variant="subtitle1" 
              sx={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                right: 0, 
                bgcolor: 'rgba(0,0,0,0.5)', 
                color: 'white', 
                p: 1,
                textAlign: 'center'
              }}
            >
              {item.title}
            </Typography>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Gallery;
