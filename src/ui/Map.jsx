import React, { useState, useEffect } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { updatePath } from "../model/Router";
import LegendaryItem from "./LegendaryItem";
import "./Map.css";
import "./MediaMap.css";

const Map = ({ img, items }) => {
  function changePath (e) {
    if (e.target.classList.contains("map-img__item")) updatePath(`/statistics/${e.target.dataset.place}`);
  };

  const [ statistic, setStatistic ] = useState([]);

  useEffect(() => {
    if (items != undefined) items.forEach(item => setStatistic(statistic => [...statistic, { current: item.current, all: item.all }]));
  }, []);

  window.addEventListener("mousedown", changePath);
  window.addEventListener("touchstart", changePath);

  let scr = window.screen.width;

  let margin = scr <= 480 ? {"margin-left": "0px"} : { "margin-left": "210px"};

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
    <>
      <img className='map-img' src={img} alt='' draggable={false} />
      <div className="map-img__item item--first-child" data-place="1">
        {statistic.length > 0 ? <LegendaryItem current={statistic[0].current} all={statistic[0].all} margin={{}} /> : ""}
      </div>
      <div className="map-img__item item--second-child" data-place="2">
        {statistic.length > 0 ? <LegendaryItem current={statistic[1].current} all={statistic[1].all} margin={margin} /> : ""}
      </div>
      <div className="map-img__item item--last-child" data-place="5">
        {statistic.length > 0 ? <LegendaryItem current={statistic[2].current} all={statistic[2].all}  margin={margin} /> : ""}
      </div>
    </>
  );
};

export { Map };
