import { createEffect } from 'effector';
import { mount, unmount } from './events';
import { ApiService } from '../../services';

const apiService = new ApiService();

const fetch = createEffect('fetch stats by id');
fetch.use(apiService.getStatsById);

const timeout = createEffect('fetch timeout');
timeout.use(() => new Promise((res) => {
  setTimeout(() => res(), 20000);
}));

mount.watch((id) => {
  fetch(id);
  const stopTimeout = fetch.done.watch(timeout);
  const stopFetch = timeout.done.watch(() => fetch(id))
  const unsubscribe = unmount.watch(() => {
    stopTimeout();
    stopFetch();
    unsubscribe();
  });
});

export { fetch };