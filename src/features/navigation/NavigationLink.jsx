import React from 'react';
import { useStore } from 'effector-react';
import ListItem from '@material-ui/core/ListItem';
import { ListItemText } from '@material-ui/core';
import { $router, updatePath } from '../../model/Router';

const NavigationLink = ({ label, path, onClick }) => {
  const currentLocation = useStore($router);

  const isSelected = currentLocation === path;

  const navigate = () => {
    onClick();
    updatePath(path);
  };

  return (
    <ListItem
      className='nav-item'
      button
      divider
      onClick={navigate}
      selected={isSelected}>
        <ListItemText
          className='nav-text'
          primary={label}
        />
    </ListItem>
  );
};

export { NavigationLink };