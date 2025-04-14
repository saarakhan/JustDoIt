import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeComponent = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-gradient-to-r from-[#556B2F] to-[#A9C18D] min-h-screen flex flex-col justify-center items-center text-white px-6 py-16'>
      <div className='text-center space-y-6'>
        <h1 className='text-5xl font-bold leading-tight text-[#3B4B1B]'>Welcome to JustDoIt</h1>
        <p
          className='text-lg max-w-lg mx-auto bg-gradient-to-r from-[#a9ada9] via-[#ffffff] to-[#fffdf7] bg-clip-text text-transparent drop-shadow-md opacity-90'
          style={{ fontFamily: "'Parisienne', cursive", fontSize: '29px' }}>
          Organize your tasks, track progress, and boost your productivity with JustDoIt.
        </p>
        <div className='flex justify-center gap-6 mt-6'>
          <button onClick={() => navigate('/register')} className='px-8 py-3 bg-[#3B4B1B] text-[#FAF3DD] text-lg rounded-lg hover:bg-[#FDF6E3] hover:text-[#3B4B1B] transition duration-200'>
            Get Started
          </button>
          <button
            onClick={() => navigate('/login')}
            className='px-8 py-3 bg-transparent border-2 border-[#3B4B1B] text-[#3B4B1B] text-lg rounded-lg hover:bg-[#3B4B1B] hover:text-[#FAF3DD] transition duration-200'>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
