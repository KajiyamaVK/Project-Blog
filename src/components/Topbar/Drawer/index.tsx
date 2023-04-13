import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FiMenu } from 'react-icons/fi';
import { links, socialLinks } from '../Links';
import { scrollTo } from '@/Functions';
import { linkClasses } from '@mui/material';

export default function TemporaryDrawer() {
  const [isOpen, setOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpen(open);
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <p className="ml-3 mt-3">Páginas</p>
      <List>
        {links.map((link) => (
          <ListItem key={link.label} disablePadding>
            <ListItemButton onClick={() => scrollTo(link.linkURL)}>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <p className="ml-3 mt-3">Social</p>
      <List>
        {socialLinks.map((link) => (
          <ListItem key={link.label} disablePadding>
            <ListItemButton>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <FiMenu
          onClick={toggleDrawer(true)}
          className="mr-8 mt-8 cursor-pointer text-3xl text-white md:hidden"
        />
        <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
    </div>
  );
}
