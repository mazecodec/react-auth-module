import React from "react";
import "./Login.css";
import useAuth from "../../features/auth/hooks/useAuth.jsx";

const Login = (props) => {
	const { login } = useAuth();
	const loginHandler = async () => {
		try {
			const response = await login({username: "demo", password: 1234 });
			console.log(response);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<button type="button" onClick={loginHandler}>
				LogIn
			</button>
		</div>
	);
};

Login.propTypes = {};
Login.defaultProps = {};

export default Login;
