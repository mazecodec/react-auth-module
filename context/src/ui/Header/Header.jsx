import React from 'react';
import useAuth from '../../features/auth/services/useAuth.jsx';

/**
 * Renders the header component displaying user information.
 *
 * @return {JSX.Element} The header component.
 */
const Header = () => {
  const {user} = useAuth()

  const renderUser = () => {
    if(!user) {
      return null;
    }

    return (<ul>
      <li>{user.first_name}</li>
      <li>{user.username}</li>
      <li>{user.email}</li>
    </ul>
    )
  }

  return (
      <header>
        <h1>User</h1>
        {renderUser()}
      </header>
  );
};

export default Header