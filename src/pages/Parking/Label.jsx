import React from 'react';

const Label = ({ id, current, all }) => {
  return (
    <span className='cars-list-label'>
      № {id}, Свободно: {all-current} из {all}
    </span>
  );
};

export { Label };