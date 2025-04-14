import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { token, logout } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', status: 'pending' });
  const [isEditing, setIsEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const fetchTasks = async () => {
    try {
      const res = await axios.get('https://justdoit-1.onrender.com/api/tasks', config);
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`https://justdoit-1.onrender.com/api/tasks/${isEditing}`, form, config);
        setIsEditing(null);
      } else {
        await axios.post('https://justdoit-1.onrender.com/api/tasks', form, config);
      }
      setForm({ title: '', description: '', status: 'pending' });
      fetchTasks();
      setShowForm(false);
    } catch (err) {
      console.log(err);
      alert('Something went wrong');
    }
  };

  const handleDelete = async id => {
    try {
      await axios.delete(`https://justdoit-1.onrender.com/api/tasks/${id}`, config);
      fetchTasks();
    } catch (err) {
      console.log(err);
      alert('Failed to delete task');
    }
  };

  const handleEdit = task => {
    setForm(task);
    setIsEditing(task._id);
    setShowForm(true);
  };

  return (
    <div className='min-h-screen bg-gradient-to-r from-white via-[#F0F7E6] to-white'>
      <header className='bg-gradient-to-r from-[#556B2F] to-[#A9C18D] shadow-md'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center'>
          <h1 className='text-2xl font-bold text-white'>
            <Link to='/'>JustDoIt Dashboard</Link>
          </h1>
          <button onClick={logout} className='bg-[#3B4B1B] text-[#FAF3DD] px-4 py-2 rounded-md hover:bg-[#FAF3DD] hover:text-[#3B4B1B] transition duration-200'>
            Logout
          </button>
        </div>
      </header>

      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {tasks.map((task, index) => (
            <div key={task._id || index} className='bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300'>
              <div className='p-5'>
                <h2 className='text-lg font-semibold text-[#3B4B1B] mb-2'>{task.title}</h2>
                <p className='text-gray-600 mb-3'>{task.description}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${task.status === 'completed' ? 'bg-[#A9C18D] text-[#3B4B1B]' : 'bg-amber-100 text-amber-800'}`}>{task.status}</span>
              </div>
              <div className='bg-gray-50 px-5 py-3 flex justify-end space-x-2'>
                <button onClick={() => handleEdit(task)} className='p-2 text-[#556B2F] hover:bg-[#F0F7E6] rounded-md transition-colors duration-200' aria-label='Edit task'>
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(task._id)} className='p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200' aria-label='Delete task'>
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        {tasks.length === 0 && (
          <div className='text-center py-10'>
            <p className='text-gray-500'>No tasks available. Add a new task to get started.</p>
          </div>
        )}
      </main>

      <button
        onClick={() => setShowForm(!showForm)}
        className='fixed bottom-8 right-8 bg-[#556B2F] text-white p-4 rounded-full shadow-lg hover:bg-[#3B4B1B] transition duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#A9C18D] focus:ring-offset-2'
        aria-label='Add task'>
        <FaPlus size={18} />
      </button>

      {showForm && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden'>
            <div className='px-6 py-4 bg-[#F0F7E6] border-b border-[#A9C18D]'>
              <h3 className='text-lg font-medium text-[#3B4B1B]'>{isEditing ? 'Update Task' : 'Add New Task'}</h3>
            </div>

            <form onSubmit={handleSubmit} className='p-6'>
              <div className='space-y-4'>
                <div>
                  <label htmlFor='title' className='block text-sm font-medium text-gray-700 mb-1'>
                    Title
                  </label>
                  <input
                    id='title'
                    name='title'
                    value={form.title}
                    onChange={handleChange}
                    placeholder='Task title'
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#556B2F] focus:border-[#556B2F]'
                    required
                  />
                </div>

                <div>
                  <label htmlFor='description' className='block text-sm font-medium text-gray-700 mb-1'>
                    Description
                  </label>
                  <textarea
                    id='description'
                    name='description'
                    value={form.description}
                    onChange={handleChange}
                    placeholder='Task description'
                    rows='3'
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#556B2F] focus:border-[#556B2F]'
                    required
                  />
                </div>

                <div>
                  <label htmlFor='status' className='block text-sm font-medium text-gray-700 mb-1'>
                    Status
                  </label>
                  <select
                    id='status'
                    name='status'
                    value={form.status}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#556B2F] focus:border-[#556B2F]'>
                    <option value='pending'>Pending</option>
                    <option value='completed'>Completed</option>
                  </select>
                </div>
              </div>

              <div className='mt-6 flex justify-end space-x-3'>
                <button type='button' onClick={() => setShowForm(false)} className='px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition duration-200'>
                  Cancel
                </button>
                <button type='submit' className='px-4 py-2 bg-[#3B4B1B] text-[#FAF3DD] rounded-md hover:bg-[#556B2F] transition duration-200'>
                  {isEditing ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
