import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { useLoginMutation } from "src/features/auth/api/AuthApi.jsx";
import { loginAuth, logoutAuth } from "src/features/auth/slices/authSlice.js";

const useAuth = () => {
	const dispatch = useDispatch();
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const {
		getValue: getUserLocalStorage,
		setValue: setUserLocalStorage,
		removeValue: removeUserLocalStorage,
	} = useLocalStorage("user", null);
	const [loginApi] = useLoginMutation();
	const user = useSelector((state) => state.auth.user);
	const isLoading = useSelector((state) => state.auth.isLoading);
	const error = useSelector((state) => state.auth.error);
	const isSuccess = user && !error;

	useEffect(() => {
		const userLocalStorage = getUserLocalStorage();

		if (userLocalStorage) {
			setIsAuthenticated(true);
			dispatch(loginAuth({ user: userLocalStorage, success: true }));
		}
	}, []);

	const login = async (username, password) => {
		const { data: user } = await loginApi({ username, password });
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
		login,
		logout,
		user,
		isAuthenticated,
		error,
		isLoading,
		isSuccess
	};
};

export default useAuth;
