import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import style from './Form.module.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const Form = () => {
  const [inputValues, setInputValues] = useState({
    name: '',
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
        'http://localhost:8080/auth/register',
        inputValues
      );
      return setFormData(res.data);
    } catch (err) {
      return console.log(err);
    }
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1, { replace: true })}>Back</button>
      <form onSubmit={handleSubmit}>
        <div className={style.labelWithinputCont}>
          <div>
            <label htmlFor=''>user name</label>
          </div>
          <div className={style.inputField}>
            <input
              type='text'
              placeholder='enter name here..'
              name='name'
              value={inputValues.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor=''>user email</label>
          </div>
          <div className={style.inputField}>
            <input
              type='text'
              placeholder='enter email here..'
              name='email'
              value={inputValues.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor=''>password</label>
          </div>
          <div className={style.inputField}>
            <input
              type='text'
              placeholder='enter password here..'
              name='password'
              value={inputValues.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <button style={{cursor:"point"}}>submit</button>
      </form>
      <p>
        If you already have an account, just{' '}
        <span
          onClick={() => navigate('/login', { replace: true })}
          className={style.loginbtn}
        >
          login{' '}
        </span>{' '}
      </p>
    </>
  );
};

export default Form;
