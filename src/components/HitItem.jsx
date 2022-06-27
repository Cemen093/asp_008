import React from 'react';

const HitItem = ({hit}) => {
  return (
    <div className="hit_card">
      <div className={"hit_content"}>
        <div>Date: {hit.date}</div>
        <div>TemperatureC: {hit.temperatureC}</div>
        <div>TemperatureF: {hit.temperatureF}</div>
        <div>Summary: {hit.summary}</div>
      </div>
    </div>
  );
};

export default HitItem;