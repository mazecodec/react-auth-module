import useAuth from 'src/features/auth/hooks/useAuth.jsx';

const Login = (props) => {
  const {login, isLoading, isSuccess} = useAuth();

  console.log(isLoading);
  const loginHandler = async () => {
    await login('kminchelle', '0lelplRs');
  }

  return (
      <div>
        {isSuccess && <p>Success</p>}
        <button type="button" onClick={loginHandler}>{isLoading ? 'Loading...' : 'Login'}</button>
      </div>
  );
};

Login.propTypes = {};
Login.defaultProps = {};

export default Login;