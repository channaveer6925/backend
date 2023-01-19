import React from 'react';
import style from './model.module.css';

const Model = ({handlemodel}) => {

  return (
    <div className={style.modelCont}>
      <div>job</div>
      <div>myapplication</div>
      <div>inviotes</div>
      <button onClick={handlemodel}>X</button>
    </div>
  );
};

export default Model;
