import React from 'react';
import { Link } from 'react-router-dom';

export function IsLogged({ firstName, lastName, handleLogin, isLogged }) {
  return (
    <div className='login-page'>
      <input type='text' value={firstName} />
      <input type='text' value={lastName} />
      <Link to='/home' onClick={handleLogin}>
        Login
      </Link>
    </div>
  );
}
