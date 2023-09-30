import './App.css'
import {useDispatch, useSelector} from 'react-redux';
import Header from './ui/Header/Header.jsx';
import Login from './ui/Login/Login.jsx';

function App() {
  const authStorage = useSelector(state => state.auth)

  return (
    <div>
      <Header/>
      <h1>User</h1>
      <pre>
        { JSON.stringify(authStorage , null, 2)}
      </pre>
      <Login/>
    </div>
  );

}

export default App
