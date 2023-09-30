import loginApiRequest from '../api/authApiService.js';
import {loginAuth} from '../slices/authSlice.js';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

const useAuth = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = async (username, password) => {
    const user = await loginApiRequest(username, password);

    const newState = {
      user: user
    }

    dispatch(loginAuth(newState))

    setIsAuthenticated(true);
    setUser(user);

    return user;
  }

  const logout = () => {
    setIsAuthenticated(true);
  }

  return {
    login,
    logout
  }
}

export default useAuth;