import React from 'react';
import Paper from '@material-ui/core/Paper';

const Graph = ({ img }) => {
  return (
    <Paper className='graph-container'>
      <img className='graph-img' src={img} alt='' />
    </Paper>
  );
};

export { Graph };