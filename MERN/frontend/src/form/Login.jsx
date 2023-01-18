import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });
  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:8080/auth/login',
        inputValues
      );
      return setFormData(res.data);
    } catch (err) {
      return console.log(err);
    }
    setFormData({
      email: '',
      password: '',
    });
  };
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1, { replace: true })}>Back</button>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor=''>user email</label>
          <input
            type='text'
            placeholder='enter user email'
            name='email'
            value={inputValues.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor=''>user password</label>
          <input
            type='text'
            placeholder='enter user password'
            name='password'
            value={inputValues.password}
            onChange={handleChange}
          />
        </div>
        <button>submit</button>
      </form>
    </>
  );
};

export default Login;
