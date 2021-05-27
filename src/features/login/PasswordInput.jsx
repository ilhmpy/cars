import React from 'react';
import TextField from '@material-ui/core/TextField';

const PasswordInput = ({ value, onChange }) => {
  return (
    <TextField
      label='Пароль'
      type='password'
      margin='normal'
      variant='outlined'
      value={value}
      onChange={onChange}
    />
  );
};

export { PasswordInput };