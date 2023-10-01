import useAuth from '../../features/auth/services/useAuth.jsx';
import './Login.css';

const Login = (props) => {
  const {login} = useAuth();
  const loginHandler = async () => {
    await login('demo', 1234);
  }

  return (
      <div>
        <button type="button" onClick={loginHandler}>LogIn</button>
      </div>
  );
};

Login.propTypes = {};
Login.defaultProps = {};

export default Login;