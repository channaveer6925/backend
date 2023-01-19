import React, { useState } from 'react';
import style from './SignIn.module.css';
import mail from '../../assets/mail.svg';
import PasswordIcon from '../../assets/PasswordIcon.svg';

import eye from '../../assets/eye.svg';

const Signin = () => {
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    createPassword: '',
    password: '',
  });
  const [formData, setFormData] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.email && input.password) {
      let newdata = { ...input, id: new Date().getTime().toString() };
      setFormData([...formData, newdata]);
    } else {
      alert('please fill data');
    }
    setInput({
      firstName: '',
      lastName: '',
      email: '',
      createPassword: '',
      password: '',
    });
  };
  console.log(formData);
  return (
    <div className={style.container}>
      <div className={style.namaskaram}>Create your account!</div>
      <div className={style.welcome}>lets create-your Account</div>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <div className={style.iconInput1}>
          {/* <img src={mail} alt='emailIcon' /> */}
          <input
            type='text'
            placeholder='firstName'
            name='firstName'
            value={input.firstName}
            required
            onChange={handleChange}
          />
        </div>
        <div className={style.iconInput1}>
          {/* <img src={mail} alt='emailIcon' /> */}
          <input
            type='text'
            placeholder='lastName'
            name='lastName'
            value={input.lastName}
            required
            onChange={handleChange}
          />
        </div>
        <div className={style.iconInput}>
          <img src={mail} alt='emailIcon' />
          <input
            type='text'
            placeholder='Email Address'
            name='email'
            value={input.email}
            required
            onChange={handleChange}
          />
        </div>
        <div className={style.iconInput}>
          <img src={PasswordIcon} alt='passwordIcon' />
          <div className={style.passwordEyeIcon}>
            <input
              type='text'
              name='createPassword'
              placeholder='create-Password'
              value={input.createPassword}
              onChange={handleChange}
              required
            />
            <img src={eye} alt='eyeIcon' style={{ marginLeft: '4rem' }} />
          </div>
        </div>
        <div className={style.iconInput}>
          <img src={PasswordIcon} alt='passwordIcon' />
          <div className={style.passwordEyeIcon}>
            <input
              type='text'
              name='password'
              placeholder='Password'
              value={input.password}
              onChange={handleChange}
              required
            />
            <img src={eye} alt='eyeIcon' style={{ marginLeft: '4rem' }} />
          </div>
        </div>

        <div className={style.loginBtn}>
          <button>Signin</button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
