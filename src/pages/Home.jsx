import React, {useEffect, useState} from 'react';
import {useFetching} from "../components/hooks/useFetching";
import HitService from "../components/UI/API/HitService";
import HitsList from "../components/HitsList";

const Home = () => {
  const [hits, setHits] = useState([])
  const [fetchHits, isHitsLoading, hitsError] = useFetching(async () => {
    const response = await HitService.getAll();
    setHits(response.data);
  });

    useEffect(() => {
      fetchHits();
    }, [])

    return (
      <div>
        { hitsError && <h1>При загрузке хитов произошла ошибка ${hitsError}</h1> }
        <HitsList hits={hits} title={'Список хитов'} isHitsLoading={isHitsLoading}/>
      </div>
    );
};

export default Home;