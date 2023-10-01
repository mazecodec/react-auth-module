import loginApiRequest from "../api/authApiService.js";
import { createContext, useContext, useEffect, useReducer } from "react";
import authStorage from "../localStorage/authStorage.js";

const initialState = {
	user: null,
	isAuthenticated: false,
};

const AuthContext = createContext(initialState);

const authReducer = (state, action) => {
	switch (action.type) {
		case "login":
			return {
				...state,
				user: action.user,
				isAuthenticated: true,
			};
		case "logout":
			return {
				...state,
				user: null,
				isAuthenticated: false,
			};
	}

	return state;
};

export const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, initialState);

	useEffect(() => {
		const user = authStorage.get();
		dispatch({ type: "login", user: user, isAuthenticated: true });
	}, []);

	const login = async (username, password) => {
		const user = await loginApiRequest(username, password);

		authStorage.set(user);
		dispatch({ type: "login", user: user, isAuthenticated: true });

		return user;
	};

	const logout = () => {
		authStorage.remove();
		dispatch({ type: "logout" });
	};

	const returnValues = {
		login,
		logout,
		user: state.user,
		isAuthenticated: state.isAuthenticated,
	};

	return (
		<AuthContext.Provider value={returnValues}>{children}</AuthContext.Provider>
	);
};

const useAuth = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error("useAuth must be used within a AuthProvider");
	}

	return context;
};

export default useAuth;
