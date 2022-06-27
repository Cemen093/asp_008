import React from 'react';
import HitItem from "./HitItem";
import Loader from "./UI/Loader/Loader";

const HitsList = ({hits, title, isHitsLoading}) => {
  if (isHitsLoading){
    return <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>;
  }

  if (!hits.length){
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Хиты не найдены</h1>
      </div>
    )
  }

  return (
    <div>
      <div className="hits_list_title">
        <h1 style={{textAlign: 'center'}}>{title}</h1>
      </div>
      {hits.map((item, index) =>
        <HitItem hit={item} key={index}/>
      )}
    </div>
  );
};

export default HitsList;