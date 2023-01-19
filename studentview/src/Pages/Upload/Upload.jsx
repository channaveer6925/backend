import React from 'react';
import style from './Upload.module.css';
import upload from '../../assets/upload.svg';

const Upload = () => {
  return (
    <div className={style.container}>
      <div className={style.create}>Create your account!</div>
      <div className={style.lets}>Let’s create your account</div>
      <div className={style.uploadphoto}>
        <div className={style.line1}></div>
        <div className={style.line2}></div>
        <div className={style.uploadBtn}>
          <img src={upload} alt='' />
          <button>Upload</button>
        </div>
      </div>
      <div className={style.nextBtn}>
        <button>Next</button>
      </div>
      <div className={style.already}>Already a member? Login</div>
    </div>
  );
};

export default Upload;
