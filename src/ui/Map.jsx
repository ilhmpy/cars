import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

const Map = ({ img }) => {
  if (!img) {
    return (
      <Skeleton
        className='map-img'
        variant='rect'
        height='35vh'
      />
    );
  };

  return (
    <img className='map-img' draggable='false' src={img} alt='' />
  );
};

export { Map };