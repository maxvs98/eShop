export const login = (id, log, role) => ({
  type: 'LOGIN',
  payload: {
    id,
    log,
    role,
  },
});

export const logout = () => ({
  type: 'LOGOUT',
});
