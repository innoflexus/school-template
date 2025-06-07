// MobileMenu.tsx

import React from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer
} from '@mui/material';
import { ReactNode } from 'react';

export interface NavItem {
  id: string;
  text: string;
  icon: ReactNode;
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  scrollTo: (id: string) => void;
  navItems: NavItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose, scrollTo, navItems }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List sx={{ width: 250 }}>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
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
    </Drawer>
  );
};

export default MobileMenu;
