import { createStore, forward } from 'effector';
import { loadData, loadIds } from './events';
import { fetch, fetchIds } from './effects';

forward({ from: loadData, to: fetch });
forward({ from: loadIds, to: fetchIds });

const ids = { data: [], loading: false };
const $ids = createStore(ids)
  .on(fetchIds.pending, (state, loading) => {
    return { ...state, loading };
  })
  .on(fetchIds.done, (state, { result }) => {
    return { ...state, data: result };
  });

const statistics = { graphs: [], loading: false, error: '' };
const $statistics = createStore(statistics)
  .on(fetch.pending, (state, loading) => {
    return { ...state, loading };
  })
  .on(fetch.done, (state, { result }) => {
    return { ...state, ...result };
  });

export { $statistics, $ids };