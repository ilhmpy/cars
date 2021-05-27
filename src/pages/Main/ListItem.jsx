import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Label } from './Label';
import { DetailsButton } from './DetailsButton';

const ListItem = ({ id, current, all }) => {
  return (
    <Paper className='cars-list-item' key={id}>
      <Label id={id} current={current} all={all} />
      <DetailsButton id={id} />
    </Paper>
  );
};

export { ListItem };