import React from 'react';
import { Redirect } from 'react-router-dom';
import { $user } from '../model/User';
import { useStore } from 'effector-react';

const requireAuth = (Wrapped) => (props) => {
  const { auth } = useStore($user);

  if (!auth) { return <Redirect to='/' /> };

  return <Wrapped {...props} />;
};

export { requireAuth };