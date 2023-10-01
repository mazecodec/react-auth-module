import './App.css'
import Header from './ui/Header/Header.jsx';
import Login from './ui/Login/Login.jsx';
import useAuth from './features/auth/hooks/useAuth.jsx';
import Logout from './ui/Logout/Logout.jsx';

function App() {
  const {user} = useAuth()

  return (
    <div>
      <Header/>

      <pre>
        { JSON.stringify(user , null, 2)}
      </pre>
      <Login/>
      <Logout/>
    </div>
  );

}

export default App
