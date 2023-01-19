import React, { useState } from 'react';
import style from './Nav.module.css';
import ajnasymbole from '../../assets/ajnasymbole.svg';
import save from '../../assets/save.png';
import notification from '../../assets/notification.png';
import email from '../../assets/email.png';
import profile from '../../assets/profile.svg';
import hamburger from '../../assets/hamburger.svg';
import Model from '../model/Model';

const Navbar = () => {
  const [model, setModel] = useState(false);

  const handlemodel = () => {
    setModel(!model);
  };

  return (
    <div>
      <div className={style.container}>
        <div className={style.hamburger} onClick={handlemodel}>
          <img src={hamburger} alt='' />
        </div>
        <div className={style.ajnvidyaCont}>
          <div>
            <img src={ajnasymbole} alt='' />
          </div>
          <div className={style.ajnavidyaTxt}>
            Ajna <span>Vidya</span>{' '}
          </div>
        </div>
        <div className={style.categaryCont}>
          <div>Job</div>
          <div>My Application</div>
          <div>Invites</div>
          <div>Business</div>
        </div>
        <div className={style.profileCont}>
          <div className={style.saveContCont}>
            <img src={save} alt='' />
          </div>
          <div className={style.notification}>
            <img src={notification} alt='' />
          </div>
          <div className={style.emailCont}>
            <img src={email} alt='' />
          </div>
          <div className={style.userCont}>
            <img src={profile} alt='' />
          </div>
        </div>
      </div>
      {model && <Model handlemodel={handlemodel} />}
    </div>
  );
};

export default Navbar;
