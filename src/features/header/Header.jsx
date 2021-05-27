import React from 'react';
import { useStore } from 'effector-react';
import { Navigation } from '../navigation';
import { $user } from '../../model/User';
import { $title, publicNav, privateNav } from '../../model/Router';

const Header = () => {
  const title = useStore($title);
  const { auth, checked } = useStore($user);

  return (
    <header className='header'>
      <Navigation items={checked && (auth ? privateNav : publicNav)} />
      {title}
    </header>
  );
};

export { Header };