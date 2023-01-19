import React, { useState } from 'react';
import style from '../JobCard/Job.module.css';

const Readmore = ({ children }) => {
  const text = children;
  const [readMore, setReadmore] = useState(true);
  const toggle = () => {
    setReadmore(!readMore);
  };
  //    <div >
  {
    /* <button>Readmore</button> */
  }
  // </div>

  return (
    <div className={style.readmoreCont}>
      {readMore ? text.slice(0, 400) : text}
      <button onClick={toggle}>{readMore ? 'Viewmore' : 'Viewless'}</button>
    </div>
  );
};

export default Readmore;
