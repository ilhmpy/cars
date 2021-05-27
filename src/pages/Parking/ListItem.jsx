import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Label } from './Label';

const ListItem = ({ id, current, all }) => {
  return (
    <Paper className='parking-info-item' key={id}>
      <Label id={id} current={current} all={all} />
    </Paper>
  );
};

export { ListItem };