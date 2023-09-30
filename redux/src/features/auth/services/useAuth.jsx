import loginApiRequest from "../api/authApiService.js";
import { loginAuth, logoutAuth } from "../slices/authSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import authStorage from "../../../app/localStorage/authStorage.js";

const useAuth = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth.user);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const user = authStorage.get();

		if (user) {
			dispatch(loginAuth(user));
			setIsAuthenticated(true);
		}
	}, []);

	const login = async (username, password) => {
		const user = await loginApiRequest(username, password);

		if (!user) {
			throw new Error("Invalid username or password");
		}

		// dispatch
		dispatch(loginAuth(user));
		// storage
		authStorage.set(user);
		// state
		setIsAuthenticated(true);

		return user;
	};

	const logout = () => {
		// dispatch
		authStorage.remove();
		dispatch(logoutAuth());
		// storage
		// state
		setIsAuthenticated(false);
	};

	return {
		login,
		logout,
		user,
		isAuthenticated,
	};
};

export default useAuth;
