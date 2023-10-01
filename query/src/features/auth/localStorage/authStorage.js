const authStorage = {
  get: () => {
    return localStorage.getItem('user');
  },
  set: (user) => {
    localStorage.setItem('user', user);
  },
  remove: () => {
    localStorage.removeItem('user');
  },
}

export default authStorage