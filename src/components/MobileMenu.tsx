import React from 'react';
import { Home, Info, Book, Photo, Mail } from '@mui/icons-material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';  // <-- Import this
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  scrollTo: (id: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose, scrollTo }) => {
  const menuItems = [
    { id: 'home', text: 'Home', icon: <Home /> },
    { id: 'about', text: 'About', icon: <Info /> },
    { id: 'courses', text: 'Courses', icon: <Book /> },
    { id: 'gallery', text: 'Gallery', icon: <Photo /> },
    { id: 'contact', text: 'Contact', icon: <Mail /> },
  ];

  if (!open) return null;

  return (
    <List sx={{ width: 250 }}>
      {menuItems.map((item) => (
        <ListItem key={item.id} disablePadding>
          <ListItemButton
            component="button"
            onClick={() => {
              scrollTo(item.id);
              onClose();
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default MobileMenu;
