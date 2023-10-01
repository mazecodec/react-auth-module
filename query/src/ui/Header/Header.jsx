import React from "react";
import useAuth from "../../features/auth/hooks/useAuth.jsx";

const Header = () => {
	const { user } = useAuth();

  const renderUser  = (user) => {
    if(!user) {
      return null;
    }

    return (
      <ul>
        <li>{user.first_name}</li>
        <li>{user.username}</li>
        <li>{user.email}</li>
      </ul>
    );
  }

	return (
		<header>
			<h1>User</h1>
      {renderUser(user)}
		</header>
	);
};

export default Header;
