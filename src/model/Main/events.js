import { createEvent } from 'effector';

const mount = createEvent('mounted main');
const unmount = createEvent('unmounted main');

export { mount, unmount };