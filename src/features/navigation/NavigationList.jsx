import React from 'react';
import List from '@material-ui/core/List';
import { NavigationLink } from './NavigationLink';

const NavigationList = ({ items, onClick }) => {
  return (
    <List className='nav-list'>
      {items && items.length ?
        items.map(({ label, path }) => (
          <NavigationLink
            key={label}
            label={label}
            path={path}
            onClick={onClick}
          />)
        )
        :
        null}
    </List>
  );
};

export { NavigationList };