import { loginAuth, logoutAuth } from "../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import {loginApiRequest} from 'src/features/auth/api/authApiService.js';

const useAuth = () => {
	const dispatch = useDispatch();
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const {
		getValue: getUserLocalStorage,
		setValue: setUserLocalStorage,
		removeValue: removeUserLocalStorage,
	} = useLocalStorage("user", null);
	const user = useSelector((state) => state.auth.user);
	const error = useSelector((state) => state.auth.error);
	const isLoading = useSelector((state) => state.auth.loading);

	useEffect(() => {
		const userLocalStorage = getUserLocalStorage();

		if (userLocalStorage) {
			setIsAuthenticated(true);
			dispatch(loginAuth({user: userLocalStorage, success: true}));
		}
	}, []);

	const login = async (username, password) => {
		const user = await loginApiRequest(username, password);
		dispatch(loginAuth({user: user, success: true}));
		setIsAuthenticated(true);
		setUserLocalStorage(user);

		return user;
	};

	const logout = () => {
		dispatch(logoutAuth());
		setIsAuthenticated(false);
		removeUserLocalStorage();
	};

	return {
		login: login,
		logout: logout,
		user: user,
		isAuthenticated: isAuthenticated,
		error: error,
		isLoading: isLoading,
	};
};

export default useAuth;
