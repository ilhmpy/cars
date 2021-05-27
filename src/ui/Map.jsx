import React, { useState } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { updatePath } from "../model/Router";

const Map = ({ img, items }) => {
  let scr = window.screen.width;
  const [ positions, setPositions ] = useState (
    {
      firstPlace: scr <= 480 ? { min: 200, max: 230, id: 1 } : { min: 616, max: 632, id: 1 },
      secondPlace: scr <= 480 ? { min: 300, max: 305, id: 2 } : { min: 720, max: 764, id: 2 },
      fivePlace: scr <= 480 ? { min: 400, max: 405, id: 5 } : { min: 832, max: 918, id: 5 }
    }
  );

  console.log(scr)

  function changePath (e) {
    let x = e.pageX;

    const { firstPlace, secondPlace, fivePlace } = positions;

    console.log(positions)

    if (x <= firstPlace.max & x >= firstPlace.min) {
      updatePath(`/statistics/${firstPlace.id}`);
      return;
    };
    if (x <= secondPlace.max & x >= secondPlace.min) {
      updatePath(`/statistics/${secondPlace.id}`);
      return;
    };
    if (x <= fivePlace.max & x >= fivePlace.min) {
      updatePath(`/statistics/${fivePlace.id}`);
      return;
    };
  }

  window.addEventListener("mousedown", changePath);
  window.addEventListener("touchstart", changePath);


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
    <img className='map-img test' src={img} alt=''  />
  );
};

export { Map };
