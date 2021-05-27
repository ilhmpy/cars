import React from 'react';
import { PageContent } from '../../ui';
import { Form } from './Form';
import { alreadyAuth } from '../../hocs';

const Login = alreadyAuth(() => {
  return (
    <PageContent>
      <Form />
    </PageContent>
  );
});

export { Login };