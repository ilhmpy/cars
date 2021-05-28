import React, { useEffect } from 'react';
import { useStore } from "effector-react";
import { $data, mount, unmount } from '../../model/Main';
import { PageContent, DataRelevance, Map, ErrorScreen, Loader } from '../../ui';
import { FreePlaces } from './FreePlaces';
import { ParkingList } from './ParkingList';

const Main = () => {
  const { img, items, free, time, loading, error } = useStore($data);

  useEffect(() => {
    mount();
    return unmount;
  }, []);

  let scr = window.screen.width;

  if (loading) { return <Loader /> };
  if (error) { return <ErrorScreen message={error} /> };

  return (
    <PageContent>
      <Map img={img} items={items} />
      <FreePlaces free={free} />
      <DataRelevance time={time} />
      {
        scr <= 500 ? <ParkingList items={items} /> : ""
      }
    </PageContent>
  );
};

export { Main };
