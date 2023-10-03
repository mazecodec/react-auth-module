import useAuth from "../../features/auth/hooks/useAuth";

const Logout = (props) => {
	const { logout } = useAuth();
	const logoutHandler = () => {
		logout();
	};

	return (
		<div>
			<button type="button" onClick={logoutHandler}>
				LogOut
			</button>
		</div>
	);
};

Logout.propTypes = {};
Logout.defaultProps = {};

export default Logout;
