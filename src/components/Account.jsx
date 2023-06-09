import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const {user, logout} = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className='max-w-[800px] mx-auto my-20 p-4  rounded-md border-black '>
      <h1 className='text-2xl font-bold py-4'>Account</h1>
      <p>User Email: {user && user.email}</p>
      <button onClick={handleLogout} className='border px-6 py-2 my-4'>
        Logout
      </button>
    </div>
  )
}

export default Account
