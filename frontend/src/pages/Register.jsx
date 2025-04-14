import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('https://justdoit-1.onrender.com/api/auth/register', form);
      alert('Registered! Now login.');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className='h-screen flex justify-center items-center bg-gradient-to-r from-[#556B2F] to-[#A9C18D]'>
      <form onSubmit={handleSubmit} className='bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-96 space-y-5'>
        <h2 className='text-3xl font-bold text-center text-[#3B4B1B]' style={{ fontFamily: "'Parisienne', cursive" }}>
          Create Your Account 🌱
        </h2>

        <div className='relative'>
          <label htmlFor='name' className='text-[#3B4B1B] text-lg'>
            Name <span className='text-red-500'>*</span>
          </label>
          <input
            id='name'
            name='name'
            onChange={handleChange}
            placeholder='Enter your name'
            className='w-full p-3 border border-[#A9C18D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A9A5B]'
            required
          />
        </div>

        <div className='relative'>
          <label htmlFor='email' className='text-[#3B4B1B] text-lg'>
            Email <span className='text-red-500'>*</span>
          </label>
          <input
            id='email'
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
            id='password'
            name='password'
            type='password'
            onChange={handleChange}
            placeholder='Enter your password'
            className='w-full p-3 border border-[#A9C18D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A9A5B]'
            required
          />
        </div>

        <button type='submit' className='w-full bg-[#556B2F] hover:bg-[#3B4B1B] text-[#FDF6E3] font-semibold py-2 rounded-lg transition duration-200 cursor-pointer'>
          Register
        </button>

        <div className='mt-4 text-center'>
          <Link to='/login' className='text-[#3B4B1B] font-medium underline hover:text-[#2e3c14] transition duration-200'>
            Already have an account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
