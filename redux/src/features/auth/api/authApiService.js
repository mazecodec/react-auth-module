import axios from "axios";

export const API_URI = "https://dummyjson.com/";

const AuthApi = axios.create({
	baseURL: API_URI,
})

export const loginApiRequest = async (username, password) => {
	const { data } = await AuthApi.post(
			'auth/login',
		{
			username: username,
			password: password,
		},
		{
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
			},
		},
	);

	return data;
};

export const setAuthHeader = (token) => {
	AuthApi.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const setBaseURL = (url) => {
	AuthApi.defaults.baseURL = url;
}