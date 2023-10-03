import { createSlice } from "@reduxjs/toolkit";
import authApi from "src/features/auth/api/authApi.jsx";

const initialState = {
	user: null,
	token: null,
	isAuthenticated: false,
	error: null,
	isLoading: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action) => {
			state.user = action.payload.user;
			state.token = action.payload.user?.token || null;
			state.isAuthenticated = true;
		},
		logout: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addMatcher(authApi.endpoints.login.matchPending, (state, action) => {
				console.log("pending", action);
				state.isLoading = true;
			})
			.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
				console.log("fulfilled", action);
				state.user = action.payload;
				state.token = action.payload?.token || null;
				state.isAuthenticated = true;
				state.isLoading = false;
			})
			.addMatcher(authApi.endpoints.login.matchRejected, (state, action) => {
				console.log("rejected", action);
				state.error = action.payload.data.message;
				state.isLoading = false;
			});
	},
});

export const { logout: logoutAuth, login: loginAuth } = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
