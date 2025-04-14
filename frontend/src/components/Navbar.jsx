import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='w-full absolute top-0 left-0 flex justify-center mt-6  '>
      <div className='backdrop-blur-md bg-white border border-[#8A9A5B]/30 shadow-lg rounded-xl px-6 py-3 flex items-center gap-6 '>
        <h1 className='text-xl  text-[#3B4B1B] tracking-wide font-bold'>JustDoIt</h1>

        <div className='flex gap-2'>
        <button
            onClick={() => navigate('/login')}
            className="flex items-center gap-2 px-5 py-2 text-base font-medium text-[#556B2F] border border-[#556B2F] hover:bg-[#556b2f8f] hover:text-white duration-200 rounded-lg cursor-pointer"
          >
            <FaSignInAlt />
            Login
          </button>
          <button
            onClick={() => navigate('/register')}
            className="flex items-center gap-2 px-5 py-2 text-base font-medium text-[#FDF6E3] bg-[#556B2F] hover:bg-[#3B4B1B] transition duration-200 rounded-lg cursor-pointer"
          >
            <FaUserPlus />
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
