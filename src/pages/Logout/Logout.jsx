import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useStore } from 'effector-react';
import { logout, $user } from '../../model/User';
import { requireAuth } from '../../hocs';
import { Loader } from '../../ui';

const Logout = requireAuth(() => {
  const { auth } = useStore($user);
  
  useEffect(logout, []);

  if (auth) { return <Loader /> };

  return (
    <Redirect to='/' />
  );
});

export { Logout };