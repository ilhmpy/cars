import React from 'react';
import Button from '@material-ui/core/Button';

const LoadButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      color='primary'
      variant='contained'
    >
      Загрузить
    </Button>
  );
};

export { LoadButton };