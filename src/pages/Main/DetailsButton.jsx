import React from 'react';
import Button from '@material-ui/core/Button';
import { updatePath } from '../../model/Router';


const DetailsButton = ({ id }) => {
  const onClick = () => updatePath(`/statistics/${id}`);

  return (
    <Button 
      variant='contained' 
      onClick={onClick}>
        Подробнее
    </Button>
  );
};

export { DetailsButton };