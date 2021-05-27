import { createEvent } from 'effector';

const submit = createEvent();
const checkAuthenticaion = createEvent();
const loginSuccess = createEvent();
const logout = createEvent();

export { submit, loginSuccess, logout, checkAuthenticaion };