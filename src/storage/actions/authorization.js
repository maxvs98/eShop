import { createAction } from 'redux-actions';

export const login = createAction('LOGIN', (id, log, role) => ({
  id,
  log,
  role,
}));

export const logout = createAction('LOGOUT', () => ({
}));
