import { createEvent } from 'effector';

const mount = createEvent('mount parking');
const unmount = createEvent('reset parking');

export { mount, unmount };