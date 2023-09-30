import React from 'react';
import {useSelector} from 'react-redux';

const Header = () => {
  const user = useSelector(state => state.auth.user)

    return (
        <header>
          <div>
            <ul>
              <li>{user.first_name}</li>
              <li>{user.username}</li>
              <li>{user.email}</li>
            </ul>
          </div>
        </header>
    );
};

export default Header