import authStorage from '../localStorage/authStorage.js';
import loginApiRequest from '../api/authApiService.js';

export const getUser = () => {
  const userJson =  authStorage.get();

  if(!userJson) {
    return null;
  }

  return JSON.parse(userJson);
}
export const login = async ({username, password}) => {
  const user = await loginApiRequest(username, password);
  authStorage.set(JSON.stringify(user));
};

export const logout = () => {
  authStorage.remove();
};