import "./Logout.css"
import useAuth from '../../features/auth/services/useAuth.jsx';

const Logout = (props) => {
  const {logout} = useAuth();
  const logoutHandler = () => {
    logout();
  }

  return (
      <div>
        <button type="button" onClick={logoutHandler}>LogOut</button>
      </div>
  );
};

Logout.propTypes = {};
Logout.defaultProps = {};

export default Logout;