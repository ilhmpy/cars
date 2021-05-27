import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { $user, checkAuthenticaion } from './model/User';
import { Header } from './features/header';
import { Main, Parking, Login, Logout, Panel, About } from './pages';
import { Loader } from './ui';

const App = () => {
  const { loading } = useStore($user);
  useEffect(checkAuthenticaion, []);

  if (loading) {
    return (
      <div className='App'>
        <Header />
        <Loader />
      </div>
    );
  };

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/login' exact component={Login} />
        <Route path='/logout' exact component={Logout} />
        <Route path='/panel' exact component={Panel} />
        <Route
          path='/statistics/:id'
          render={({ match: { params: { id } } }) => <Parking id={id} />}
        />
        <Route path='/about' exact component={About} />
        <Route render={() => <Redirect to='/' />} />
      </Switch>
    </div>
  );
};

export default App;