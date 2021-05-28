import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Label } from './Label';
import "./ListItem.css";
import { DetailsButton } from './DetailsButton';

const ListItem = ({ id, current, all }) => {
  return (
    <div className='cars-list-item-custom' key={id}>
      <Label id={id} current={current} all={all} />
    </div>
  );
};

export { ListItem };
