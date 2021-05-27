import React, { useState } from "react";
import "./ParkingListPanel.css";

export default function ParkingListPanel(props) {
  const { items } = props;
  return (
    <div className="parking_panel">
      {
        items.map(item => {
          return (
            <div className="parking_panel__item" key={item.id} id={item.id}>
                <p>№<span>{item.id}</span>, Свободно: <span>{item.all - item.current}</span> из {item.all}</p>
            </div>
          )
        })
      }
    </div>
  );
};
