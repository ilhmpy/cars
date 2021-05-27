import { createStore } from 'effector';
import { fetch } from './effects';
import { unmount } from './events';

const status = { loading: true, error: '' };
const data = { img: '', current: 0, all: 0 };

const $data = createStore({ ...data, ...status })
  .on(fetch.done, (_, { result }) => {
    return { ...result, loading: false };
  })
  .reset(unmount);

export { $data };