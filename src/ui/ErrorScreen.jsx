import React from 'react';
import { PageContent } from './PageContent';
import errorImg from '../images/error.svg';

const ErrorScreen = ({ message }) => {
  return (
    <PageContent>
      <div className='error-box'>
        <img className='loading-spinner' src={errorImg} alt='' />
        <p>{message}</p>
      </div>
    </PageContent>
  );
};

export { ErrorScreen };