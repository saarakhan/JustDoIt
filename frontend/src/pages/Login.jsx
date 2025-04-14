import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      login(res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className='h-screen flex justify-center items-center bg-gradient-to-r from-[#556B2F] to-[#A9C18D]'>
      <form onSubmit={handleSubmit} className='bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-96 space-y-5'>
        <h2 className='text-3xl font-bold text-center text-[#3B4B1B]' style={{ fontFamily: "'Parisienne', cursive" }}>
          Welcome Back 🌿
        </h2>
        <div className='relative'>
          <label htmlFor='email' className='text-[#3B4B1B] text-lg'>
            Email <span className='text-red-500'>*</span>
          </label>
          <input
            name='email'
            type='email'
            onChange={handleChange}
            placeholder='Enter your email'
            className='w-full p-3 border border-[#A9C18D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A9A5B]'
            required
          />
        </div>

        <div className='relative'>
          <label htmlFor='password' className='text-[#3B4B1B] text-lg'>
            Password <span className='text-red-500'>*</span>
          </label>
          <input
            name='password'
            type='password'
            onChange={handleChange}
            placeholder='Enter your password'
            className='w-full p-3 border border-[#A9C18D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A9A5B]'
            required
          />
        </div>

        <button type='submit' className='w-full bg-[#556B2F] hover:bg-[#3B4B1B] text-[#FDF6E3] font-semibold py-2 rounded-lg transition duration-200 cursor-pointer'>
          Login
        </button>

        <div className='mt-4 text-center'>
          <Link to='/register' className='text-[#3B4B1B] font-medium underline hover:text-[#2e3c14] transition duration-200'>
            Create a new account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
