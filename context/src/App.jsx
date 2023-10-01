import './App.css';
import Header from './ui/Header/Header.jsx';
import Login from './ui/Login/Login.jsx';
import Logout from './ui/Logout/Logout.jsx';
import useAuth from './features/auth/services/useAuth.jsx';

function App() {
  const {user} = useAuth();
  const isDev = false;

  return (
    <div>
      <Header/>
      <Login/>
      <Logout/>
      <pre style={{display: isDev ? 'block' : 'none'}}>
        { JSON.stringify(user , null, 2)}
      </pre>
    </div>
  );

}

export default App
