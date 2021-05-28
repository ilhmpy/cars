import React from 'react';
import { ListItem } from './ListItem';

const ParkingInfo = ({ id, current, all }) => {
  return (
    <section className='parking-info'>
      <ListItem id={id} current={current} all={all} />
      <a href="/" className="parking-info__btn"style={{
        "box-shadow": "0px 1px 3px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 2px 1px -1px rgb(0 0 0 / 12%)",
        "width": "30%",
        "max-width": "120px",
        "height": "30px",
        "cursor": "pointer",
        "margin-top": "30px",
        "background": "#fff",
        "border-radius": "10px",
        "display": "flex",
        "align-items": "center",
        "justify-content": "center",
        "text-decoration": "none",
        "color": "#000"
      }}>Назад</a>
    </section>
  );
};

export { ParkingInfo };
