import React from 'react';
import { ListItem } from './ListItem';

const ParkingInfo = ({ id, current, all }) => {
  return (
    <section className='parking-info'>
      <ListItem id={id} current={current} all={all} />
    </section>
  );
};

export { ParkingInfo };