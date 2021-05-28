import React from 'react';
import { ListItem } from './ListItem';
import "./ParkingList.css";

const ParkingList = ({ items }) => {
  return (
    <section className='cars-list'>
      {items && items.length ?
        items.map(({ id, current, all }) => {
          return (
            <ListItem key={id} id={id} current={current} all={all} />
          );
        })
        :
        null}
    </section>
  );
};

export { ParkingList };
