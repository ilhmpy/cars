import { createStore, forward } from 'effector';
import { submit, loginSuccess, checkAuthenticaion, logout } from './events';
import { doLogin, doLogout, checkAuth } from './effects';

forward({ from: submit, to: doLogin });

const form = { login: '', password: '', error: '', loading: false };
const $form = createStore(form)
  .on(submit, (state, _) => {
    return { ...state, error: '' };
  })
  .on(doLogin.done, (state, { result }) => {
    return {...state, ...result };
  });

const $isFormPending = doLogin.pending.map((state) => state);

doLogin.done.watch(({ result }) => {
  if (!result.error) {
    loginSuccess(result);
  };
});

const user = {
  auth: false,
  login: '',
  firstname: '',
  lastname: '',
  patronymic: ''
};

forward({ from: checkAuthenticaion, to: checkAuth });
forward({ from: logout, to: doLogout });

const $user = createStore({ user, loading: true, auth: false, checked: false })
  .on(loginSuccess, (state, result) => {
    return { ...state, ...result };
  })
  .on(checkAuth.pending, (state, loading) => {
    return { ...state, loading };
  })
  .on(checkAuth.done, (state, { result }) => {
    return { ...state, ...result, checked: true };
  })
  .on(doLogout.done, (state, { result }) => {
    return { ...state, ...result };
  });

export { $form, $isFormPending, $user };