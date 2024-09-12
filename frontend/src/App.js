import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotificationForm from './components/Flights/NotificationForm';
import Dashboard from './components/Admin/Dashboard';
import UpdateFlight from './components/Flights/UpdateFlight';
import Register from './components/Admin/Register';
import Login from './components/Admin/Login'; 

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/notify-me' element={<NotificationForm />} />
      <Route path='/admin-dashboard' element={<Dashboard />} />
      <Route path='/update-flight/:id' element={<UpdateFlight />} />
      <Route path='/register' element={<Register isOpen={true} />} /> 
      <Route path='/login' element={<Login isOpen={true} />} />
    </Routes>
  );
};

export default App;