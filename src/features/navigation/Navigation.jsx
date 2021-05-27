import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavigationList } from './NavigationList';

const Navigation = ({ items }) => {
  const [isOpened, setOpen] = useState(false);

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  return (
    <div>
      <IconButton onClick={openMenu} style={{color: 'white'}}>
        <MenuIcon />
      </IconButton>
      <Drawer open={isOpened} onClose={closeMenu}>
        <NavigationList items={items} onClick={closeMenu} />
      </Drawer>
    </div>
  );
};

export { Navigation };