import './App.css'
import {useDispatch, useSelector} from 'react-redux';
import Header from './ui/Header/Header.jsx';
import Login from './ui/Login/Login.jsx';
import Logout from './ui/Logout/Logout.jsx';

function App() {
  const authStorage = useSelector(state => state.auth)
  const isDev = false;

  return (
    <div>
      <Header/>
      <Login/>
      <Logout/>
      <pre style={{display: isDev ? 'block' : 'none'}}>
        { JSON.stringify(authStorage , null, 2)}
      </pre>
    </div>
  );

}

export default App
