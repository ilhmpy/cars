import { createEvent } from 'effector';

const updatePath = createEvent();
const newPath = createEvent();

export { updatePath, newPath };