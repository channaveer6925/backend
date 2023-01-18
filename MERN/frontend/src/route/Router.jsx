import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from '../form/Form';
import Login from '../form/Login';
import Home from '../Home/Home';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Form />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
};

export default Router;
