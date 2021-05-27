import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PageContent } from './PageContent';

const Loader = () => {
  return (
    <PageContent>
      <div className='loader'>
        <CircularProgress />
      </div>
    </PageContent>
  );
};

export { Loader };