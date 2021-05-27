import { createStore } from 'effector';
import { createBrowserHistory } from 'history';
import { newPath, updatePath } from './events';
import { comparePath } from './routesConfig';
import { loginSuccess } from '../User/events';

const history = createBrowserHistory();
const init = history.location.pathname;

history.listen(({ pathname }) => newPath(pathname));

const $router = createStore(init)
  .on(newPath, (_, path) => path)
  .on(updatePath, (_, path) => history.push(path))
  .on(loginSuccess, () => history.push('/panel'));

const $title = createStore(comparePath(init))
  .on(newPath, (_, path) => comparePath(path));

export { history, $router, $title };