import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {getUser, login, logout} from '../services/authService.js';

const useAuth = () => {
	const queryClient = useQueryClient()
	const {data: user, refetch	} = useQuery({
		queryKey: ['auth', 'data'],
		queryFn: getUser,
		onError: (data) => {
			if(!data) {
				queryClient.invalidateQueries({ queryKey: ['auth','data'] })
			}
		}
	})
	const mutationLogin = useMutation({
		mutationKey: ['auth','login'],
		mutationFn: login,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['auth','data'] })
		},
	});
	const mutationLogout = useMutation({
		mutationKey: ['auth','logout'],
		mutationFn: logout,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['auth','data'] })
			refetch();
		},
	});

	return {
		login: mutationLogin.mutateAsync,
		logout: mutationLogout.mutate,
		user
	};
};

export default useAuth;
