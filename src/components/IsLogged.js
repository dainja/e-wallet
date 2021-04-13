import React from 'react';
import { Link } from 'react-router-dom';

export function IsLogged({ firstName, lastName, handleLogin }) {
  return (
    <div className='login-page'>
      <h5>Login</h5>
      <input type='text' defaultValue={firstName} />
      <input type='text' defaultValue={lastName} />
      <Link
        to='/home'
        className='login-btn btn btn-primary'
        onClick={handleLogin}>
        Login
      </Link>
    </div>
  );
}
