import api from 'src/app/api/apiService';

const authApi = api.injectEndpoints({
	endpoints: (build) => {
		return {
			me: build.query({
				query: () => "/auth/me",
			}),
			login: build.mutation({
				query: (credentials) => {
					const { username, password } = credentials;

						return {
							url: "/auth/login",
							method: "POST",
							body: {
								username: username,
								password: password,
							},
						};
				},
			}),
			register: build.mutation({
				query: (userData) => ({
					url: "/auth/login",
					method: "POST",
					body: { ...userData },
				}),
			}),
		};
	},
});

export const { useMeQuery, useLoginMutation, useRegisterMutation } = authApi;

export const {
	endpoints: { login, me, register },
} = authApi;
export default authApi;
