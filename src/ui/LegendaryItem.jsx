import React from "react";
import "./LegendaryItem.css";

export default function LegendaryItem({ current, all, margin }) {
  return (
    <div className="LegendaryItem__item" style={margin}>
        <span>Свободно:</span><span style={{ marginRight: "5px" }}>{all - current}</span> из <span>{all}</span>
    </div>
  );
};
