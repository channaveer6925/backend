import React, { useState } from 'react';
import style from './Login.module.css';
import mail from '../../assets/mail.svg';
import PasswordIcon from '../../assets/PasswordIcon.svg';
import eye from '../../assets/eye.svg';
const Login = () => {
  const [input, setInput] = useState({
    email: '',
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
    }
    else{
      alert('please fill data')
    }
  };
  console.log(formData);
  return (
    <div className={style.container}>
      <div className={style.namaskaram}>Namaskaram 🙏</div>
      <div className={style.welcome}>Welcome Back</div>
      <form className={style.formContainer} onSubmit={handleSubmit}>
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
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
