import React from 'react';
import TextField from '@material-ui/core/TextField';

const LoginInput = ({ value, onChange }) => {
  return (
    <TextField
      label='Логин'
      margin='normal'
      variant='outlined'
      value={value}
      onChange={onChange}
    />
  );
};

export { LoginInput };