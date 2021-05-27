import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
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

  if (loading) { return <Loader /> };
  if (error) { return <ErrorScreen message={error} /> };

  return (
    <PageContent>
      <Map img={img} />
      <FreePlaces free={free} />
      <DataRelevance time={time} />
      <ParkingList items={items} />
    </PageContent>
  );
};

export { Main };