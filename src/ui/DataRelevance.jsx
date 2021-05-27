import React from 'react';
import { format } from 'date-fns';

const DataRelevance = ({ time }) => {
  const date = time ? format(new Date(time), 'dd.MM.yyyy H:mm') : '';

  return (
    <span className='relevance-label'>Данные актуальны на {date}</span>
  );
};

export { DataRelevance };