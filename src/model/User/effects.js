import { createEffect } from 'effector';
import { ApiService } from '../../services/ApiService';

const apiService = new ApiService();

const doLogin = createEffect('trying to log in');
doLogin.use(apiService.login);

const checkAuth = createEffect('check auth state');
checkAuth.use(apiService.checkAuth);

const doLogout = createEffect('trying to log out');
doLogout.use(apiService.logout);

export { doLogin, doLogout , checkAuth };