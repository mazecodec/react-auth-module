import useAuth from '../../features/auth/hooks/useAuth';

const Login = (props) => {
  const {login, isLoading} = useAuth();
  const loginHandler = async () => {
    await login('kminchelle', '0lelplR');
  }

  return (
      <div>
        <button type="button" onClick={loginHandler}>{isLoading ? 'Loading...' : 'Login'}</button>
      </div>
  );
};

Login.propTypes = {};
Login.defaultProps = {};

export default Login;