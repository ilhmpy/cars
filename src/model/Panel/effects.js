import { createEffect } from 'effector';
import { ApiService } from '../../services';

const apiService = new ApiService();

const fetch = createEffect();
fetch.use(apiService.getStatsByPeriod);

const fetchIds = createEffect();
fetchIds.use(apiService.getIds);

export { fetch, fetchIds };