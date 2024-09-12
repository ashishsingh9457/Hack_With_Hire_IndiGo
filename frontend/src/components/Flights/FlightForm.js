import React, { useState } from 'react';
import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;

const FlightForm = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const [currentStatus, setCurrentStatus] = useState({
    delay: 'No',
    cancellation: 'No',
    gateChange: 'No',
    gateNumber: '',
    landingTime: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseURL}/api/v1/flight/flights`, {
        flightNumber,
        departure,
        arrival,
        date,
        status,
        currentStatus
      });
      alert('Flight added successfully!');
      // Clear form fields after submission
      setFlightNumber('');
      setDeparture('');
      setArrival('');
      setDate('');
      setStatus('');
      setCurrentStatus({
        delay: 'No',
        cancellation: 'No',
        gateChange: 'No',
        gateNumber: '',
        landingTime: ''
      });
    } catch (error) {
      console.error('Error adding flight:', error);
      alert('Failed to add flight.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-blue-800 to-purple-600 rounded-xl shadow-2xl overflow-hidden space-y-8" style={{ animation: 'slideInFromRight 1s ease-out' }}>
      <h2 className="text-center text-4xl font-extrabold text-white" style={{ animation: 'appear 2s ease-out' }}>
        Add New Flight
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <input
              placeholder="FL123"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
              value={flightNumber}
              onChange={(e) => setFlightNumber(e.target.value)}
              required
              id="flightNumber"
              name="flightNumber"
              type="text"
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
              htmlFor="flightNumber"
            >
              Flight Number
            </label>
          </div>
          <div className="relative">
            <input
              placeholder="Departure City"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              required
              id="departure"
              name="departure"
              type="text"
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
              htmlFor="departure"
            >
              Departure
            </label>
          </div>
          <div className="relative">
            <input
              placeholder="Arrival City"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              required
              id="arrival"
              name="arrival"
              type="text"
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
              htmlFor="arrival"
            >
              Arrival
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <input
              placeholder="YYYY-MM-DD"
              type="date"
              id="date"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
              htmlFor="date"
            >
              Date
            </label>
          </div>
          <div className="relative">
            <input
              placeholder="Flight Status"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
              id="status"
              name="status"
              type="text"
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
              htmlFor="status"
            >
              Status
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <label htmlFor="delay" className="text-gray-200">Delay</label>
            <select
              id="delay"
              className="w-full px-4 py-2 border border-gray-300 rounded bg-transparent text-#1b0101 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={currentStatus.delay}
              onChange={(e) => setCurrentStatus({ ...currentStatus, delay: e.target.value })}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div className="relative">
            <label htmlFor="cancellation" className="text-gray-200">Cancellation</label>
            <select
              id="cancellation"
              className="w-full px-4 py-2 border border-gray-300 rounded bg-transparent text-#000000 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={currentStatus.cancellation}
              onChange={(e) => setCurrentStatus({ ...currentStatus, cancellation: e.target.value })}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div className="relative">
            <label htmlFor="gateChange" className="text-gray-200">Gate Change</label>
            <select
              id="gateChange"
              className="w-full px-4 py-2 border border-gray-300 rounded bg-transparent text-#000000 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={currentStatus.gateChange}
              onChange={(e) => setCurrentStatus({ ...currentStatus, gateChange: e.target.value })}
            >
              <option value="No" >No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <input
              placeholder="Gate Number"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
              value={currentStatus.gateNumber}
              onChange={(e) => setCurrentStatus({ ...currentStatus, gateNumber: e.target.value })}
              id="gateNumber"
              name="gateNumber"
              type="text"
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
              htmlFor="gateNumber"
            >
              Gate Number
            </label>
          </div>
          <div className="relative">
            <input
              placeholder="Landing Time"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
              value={currentStatus.landingTime}
              onChange={(e) => setCurrentStatus({ ...currentStatus, landingTime: e.target.value })}
              id="landingTime"
              name="landingTime"
              type="text"
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
              htmlFor="landingTime"
            >
              Landing Time
            </label>
          </div>
        </div>
        <div class="flex justify-center items-center h-full">
        <button
          type="submit"
          class="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse center active:animate-bounce">

          Add Flight
        </button>
        </div>
      </form>
    </div>
  );
};

export default FlightForm;
