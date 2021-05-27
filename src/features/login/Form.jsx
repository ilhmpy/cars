import React, { useState } from 'react';
import { useStore } from 'effector-react';
import { $form, $isFormPending, submit } from '../../model/User';
import Paper from '@material-ui/core/Paper';
import FormHelperText from '@material-ui/core/FormHelperText';
import { LoginButton } from './LoginButton';
import { LoginInput } from './LoginInput';
import { PasswordInput } from './PasswordInput';
import { CircularProgress } from '@material-ui/core';

const Form = () => {
  const { error } = useStore($form);
  const loading = useStore($isFormPending);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const loginChanged = ({ target: { value } }) => setLogin(value);
  const passwordChanged = ({ target: { value } }) => setPassword(value);
  
  const onSubmit = (e) => {
    e.preventDefault();
    submit({ login, password });
  }; 

  return (
    <Paper className='login-box'>
      <span className='login-label'>Вход</span>
      <form className='login-form' onSubmit={onSubmit}>
        <LoginInput
          value={login}
          onChange={loginChanged}
        />
        <PasswordInput
          value={password}
          onChange={passwordChanged}
        />
        <FormHelperText error className='form-error-label'>
          {error}
        </FormHelperText>
        {loading ? <CircularProgress /> : <LoginButton />}
      </form>
    </Paper>
  );
};

export { Form };