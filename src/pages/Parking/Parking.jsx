import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { $data, mount, unmount } from '../../model/Parking';
import { Map, Loader, ErrorScreen, DataRelevance, PageContent } from '../../ui';
import { ParkingInfo } from './ParkingInfo';

const Parking = ({ id }) => {
  const { img, all, current, time, loading, error } = useStore($data);

  useEffect(() => {
    mount(id);
    return unmount;
  }, [id]);

  if (loading) { return <Loader /> };
  if (error) { return <ErrorScreen message={error} /> };

  return (
    <PageContent>
      <Map img={img} />
      <DataRelevance time={time} />
      <ParkingInfo id={id} current={current} all={all} />
    </PageContent>
  );
};

export { Parking };