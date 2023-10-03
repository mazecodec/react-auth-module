import React from 'react';
import useAuth from '../../features/auth/hooks/useAuth';

/**
 * Renders the header component displaying user information.
 *
 * @return {JSX.Element} The header component.
 */
const Header = () => {
  const {user, error} = useAuth()

  const renderUser = () => {
    if(!user) {
      return null;
    }

    return (<ul>
      <li><img src={user?.image} alt="Image Avatar" /></li>
      <li>{user?.firstName}</li>
      <li>{user?.username}</li>
      <li>{user?.email}</li>
    </ul>
    )
  }

  return (
      <header>
        <h1>User</h1>
        {error && <p>{error}</p>}
        {renderUser()}
      </header>
  );
};

export default Header