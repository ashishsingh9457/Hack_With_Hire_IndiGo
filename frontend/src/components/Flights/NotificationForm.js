import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../Layout/Layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseURL = process.env.REACT_APP_API_BASE_URL;

const NotificationForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [notificationType, setNotificationType] = useState('email');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName || !email || !contactNumber || !flightNumber) {
      toast.error('Please fill in all required fields.');
      return;
    }
    try {
      await axios.post(`${baseURL}/api/v1/notification/notifications`, {
        fullName,
        email,
        contactNumber,
        flightNumber,
        notificationType
      });
      toast.success('Notification preference saved successfully!');
      setFullName('');
      setEmail('');
      setContactNumber('');
      setFlightNumber('');
      setNotificationType('email');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(`Failed to save notification preference. ${error.response ? error.response.data.message : error.message}`);
    }
  };

  return (
    <Layout title={'Get Update'}>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div
        style={{ animation: 'slideInFromLeft 1s ease-out' }}
        className="max-w-md mx-auto p-6 bg-gradient-to-r from-blue-800 to-purple-600 rounded-xl shadow-2xl overflow-hidden space-y-8"
      >
        <h2
          style={{ animation: 'appear 2s ease-out' }}
          className="text-center text-4xl font-extrabold text-white"
        >
          Register for Flight Notifications
        </h2>
        <p
          style={{ animation: 'appear 3s ease-out' }}
          className="text-center text-gray-200"
        >
          Fill in your details below
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              placeholder="John Doe"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
              required
              id="fullName"
              name="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              onBlur={() => toast.info('Full Name field updated')}
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
              htmlFor="fullName"
            >
              Full Name
            </label>
          </div>
          <div className="relative">
            <input
              placeholder="john@example.com"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
              required
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => toast.info('Email Address field updated')}
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
              htmlFor="email"
            >
              Email Address
            </label>
          </div>
          <div className="relative">
            <input
              placeholder="1234567890"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
              required
              id="contactNumber"
              name="contactNumber"
              type="text"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              onBlur={() => toast.info('Contact Number field updated')}
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
              htmlFor="contactNumber"
            >
              Contact Number
            </label>
          </div>
          <div className="relative">
            <input
              placeholder="AB1234"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
              required
              id="flightNumber"
              name="flightNumber"
              type="text"
              value={flightNumber}
              onChange={(e) => setFlightNumber(e.target.value)}
              onBlur={() => toast.info('Flight Number field updated')}
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
              htmlFor="flightNumber"
            >
              Flight Number
            </label>
          </div>
          <div className="relative">
            <label className="text-#fdfff6-600">Notification Type</label>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="email"
                  name="notificationType"
                  value="email"
                  checked={notificationType === 'email'}
                  onChange={(e) => setNotificationType(e.target.value)}
                />
                <label htmlFor="email" className="ml-2">Email</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="sms"
                  name="notificationType"
                  value="sms"
                  checked={notificationType === 'sms'}
                  onChange={(e) => setNotificationType(e.target.value)}
                />
                <label htmlFor="sms" className="ml-2">SMS</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="both"
                  name="notificationType"
                  value="both"
                  checked={notificationType === 'both'}
                  onChange={(e) => setNotificationType(e.target.value)}
                />
                <label htmlFor="both" className="ml-2">Both</label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-300"
          >
            Register
          </button>
        </form>
        <div className="text-center text-#ffffff-300">
          Already registered? <a className="text-purple-300 hover:underline" href="#">Sign in</a>
        </div>
      </div>
    </Layout>
  );
};

export default NotificationForm;
