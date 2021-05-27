import { createEffect, forward } from 'effector';
import { mount, unmount } from './events';
import { ApiService } from '../../services';

const apiService = new ApiService();

const fetch = createEffect('fetch stats');
fetch.use(apiService.getStats);

const timeout = createEffect('fetch timeout');
timeout.use(() => new Promise((res) => {
  setTimeout(() => res(), 20000);
}));

mount.watch(() => {
  fetch();
  const stopTimeout = forward({ from: fetch.done, to: timeout });
  const stopFetch = forward({ from: timeout.done, to: fetch });
  const unsubscribe = unmount.watch(() => {
    stopTimeout();
    stopFetch();
    unsubscribe();
  });
});

export { fetch };