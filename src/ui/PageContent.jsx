import React from 'react';

const PageContent = ({ children }) => {
  return (
    <main className='page-content'>
      {children}
    </main>
  );
};

export { PageContent };