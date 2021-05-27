import React from 'react';
import Button from '@material-ui/core/Button';

const LoginButton = () => {
  return (
    <Button
      type='submit'
      variant='contained'
      color='primary'
    >
      Войти
    </Button>
  );
};

export { LoginButton };