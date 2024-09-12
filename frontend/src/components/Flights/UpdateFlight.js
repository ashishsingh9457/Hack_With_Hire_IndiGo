import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseURL = process.env.REACT_APP_API_BASE_URL;

const UpdateFlightForm = ({ flightId, onClose, onSuccess }) => {
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

  useEffect(() => {
    if (flightId) {
      const fetchFlightData = async () => {
        try {
          const response = await axios.get(`${baseURL}/api/v1/flight/flights/${flightId}`);
          const flight = response.data;
          setFlightNumber(flight.flightNumber);
          setDeparture(flight.departure);
          setArrival(flight.arrival);
          setDate(flight.date);
          setStatus(flight.status);
          setCurrentStatus(flight.currentStatus);
        } catch (error) {
          console.error('Error fetching flight data:', error);
          toast.error('Failed to fetch flight data.');
        }
      };

      fetchFlightData();
    }
  }, [flightId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (flightId) {
        await axios.put(`${baseURL}/api/v1/flight/flights/${flightId}`, {
          flightNumber,
          departure,
          arrival,
          date,
          status,
          currentStatus
        });
        toast.success('Flight updated successfully!');
        // Notify the parent component
        if (onSuccess) onSuccess();
      }
      if (onClose) onClose(); // Close the modal
    } catch (error) {
      console.error('Error submitting flight:', error);
      toast.error('Failed to update flight.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-8">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Update Flight</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Form fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <input
              type="text"
              id="flightNumber"
              className="peer w-full px-4 py-2 border-b-2 border-gray-300 text-gray-900 bg-gray-50 placeholder-transparent focus:outline-none focus:border-blue-500"
              value={flightNumber}
              onChange={(e) => setFlightNumber(e.target.value)}
              required
              placeholder="Flight Number"
            />
            <label
              htmlFor="flightNumber"
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-500 peer-focus:text-sm"
            >
              Flight Number
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="departure"
              className="peer w-full px-4 py-2 border-b-2 border-gray-300 text-gray-900 bg-gray-50 placeholder-transparent focus:outline-none focus:border-blue-500"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              required
              placeholder="Departure"
            />
            <label
              htmlFor="departure"
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-500 peer-focus:text-sm"
            >
              Departure
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="arrival"
              className="peer w-full px-4 py-2 border-b-2 border-gray-300 text-gray-900 bg-gray-50 placeholder-transparent focus:outline-none focus:border-blue-500"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              required
              placeholder="Arrival"
            />
            <label
              htmlFor="arrival"
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-500 peer-focus:text-sm"
            >
              Arrival
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <input
              type="date"
              id="date"
              className="peer w-full px-4 py-2 border-b-2 border-gray-300 text-gray-900 bg-gray-50 placeholder-transparent focus:outline-none focus:border-blue-500"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <label
              htmlFor="date"
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-500 peer-focus:text-sm"
            >
              Date
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="status"
              className="peer w-full px-4 py-2 border-b-2 border-gray-300 text-gray-900 bg-gray-50 placeholder-transparent focus:outline-none focus:border-blue-500"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
              placeholder="Status"
            />
            <label
              htmlFor="status"
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-500 peer-focus:text-sm"
            >
              Status
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <label htmlFor="delay" className="text-gray-600">Delay</label>
            <select
              id="delay"
              className="w-full px-4 py-2 border-b-2 border-gray-300 text-gray-900 bg-gray-50 focus:outline-none focus:border-blue-500"
              value={currentStatus.delay}
              onChange={(e) => setCurrentStatus({ ...currentStatus, delay: e.target.value })}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div className="relative">
            <label htmlFor="cancellation" className="text-gray-600">Cancellation</label>
            <select
              id="cancellation"
              className="w-full px-4 py-2 border-b-2 border-gray-300 text-gray-900 bg-gray-50 focus:outline-none focus:border-blue-500"
              value={currentStatus.cancellation}
              onChange={(e) => setCurrentStatus({ ...currentStatus, cancellation: e.target.value })}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div className="relative">
            <label htmlFor="gateChange" className="text-gray-600">Gate Change</label>
            <select
              id="gateChange"
              className="w-full px-4 py-2 border-b-2 border-gray-300 text-gray-900 bg-gray-50 focus:outline-none focus:border-blue-500"
              value={currentStatus.gateChange}
              onChange={(e) => setCurrentStatus({ ...currentStatus, gateChange: e.target.value })}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="text"
              id="gateNumber"
              className="peer w-full px-4 py-2 border-b-2 border-gray-300 text-gray-900 bg-gray-50 placeholder-transparent focus:outline-none focus:border-blue-500"
              value={currentStatus.gateNumber}
              onChange={(e) => setCurrentStatus({ ...currentStatus, gateNumber: e.target.value })}
              placeholder="Gate Number"
            />
            <label
              htmlFor="gateNumber"
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-500 peer-focus:text-sm"
            >
              Gate Number
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="landingTime"
              className="peer w-full px-4 py-2 border-b-2 border-gray-300 text-gray-900 bg-gray-50 placeholder-transparent focus:outline-none focus:border-blue-500"
              value={currentStatus.landingTime}
              onChange={(e) => setCurrentStatus({ ...currentStatus, landingTime: e.target.value })}
              placeholder="Landing Time"
            />
            <label
              htmlFor="landingTime"
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-500 peer-focus:text-sm"
            >
              Landing Time
            </label>
          </div>
        </div>
        <div className="flex justify-center items-center h-full">
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse center active:animate-bounce"
          >
            Update Flight
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateFlightForm;
