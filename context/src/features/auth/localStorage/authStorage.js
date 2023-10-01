const LOCALSTORAGE_USER = 'user';

/**
 * @type {{set(*): void, get(): any|null}} authStorage
 */
const authStorage = {
  get() {
    const user = localStorage.getItem(LOCALSTORAGE_USER);
    return user ? JSON.parse(user) : null;
  },
  set(user) {
    localStorage.setItem(LOCALSTORAGE_USER, JSON.stringify(user));
  },
  remove() {
    localStorage.removeItem(LOCALSTORAGE_USER);
  }
}

export default authStorage