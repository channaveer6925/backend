import React, { useState } from 'react';
import style from './Job.module.css';
import compProfile from '../../assets/compProfile.svg';
import money from '../../assets/money.svg';
import map from '../../assets/map.svg';
import award from '../../assets/award.svg';
import Readmore from '../Readmore/Readmore';

const JobCard = () => {
  return (
    <div className={style.container}>
      {/* profilecontainer with Apply&saveIcon btn */}

      <div className={style.profileApplyBtnCont}>
        <div className={style.leftCont}>
          <div className={style.compProfile}>
            <img src={compProfile} alt='' />
          </div>
          <div className={style.joroleCompName}>
            <div className={style.jobrole}>3D NFT Artist</div>
            <div className={style.compName}>Apple</div>
          </div>
        </div>
        <div className={style.rightCont}>
          <div>
            <button>Apply</button>
          </div>
          <div>save</div>
        </div>
      </div>

      {/* salary &location */}
      <div className={style.salaryLocation}>
        <div className={style.salaryCont}>
          <div className={style.money}>
            <img src={money} alt='' />
          </div>
          <div className={style.salaryLpa}>
            <p className={style.salaryTxt}>Salary-</p>
            <p className={style.package}>16Lpa</p>
          </div>
        </div>
        {/* location */}
        <div className={style.salaryCont}>
          <div className={style.money}>
            <img src={map} alt='' />
          </div>
          <div className={style.salaryLpa}>
            <p className={style.salaryTxt}>Location</p>
            <p className={style.package}>Mumbai</p>
          </div>
        </div>
      </div>
      {/* badges */}
      <div className={style.badgesCon}>
        <div className={style.badges}>
          <div className={style.nftCont}>
            <img src={award} alt='' />
          </div>
          <button>NFT Artist</button>
        </div>
        {/* <div className={style.badges}>
          <div className={style.nftCont}>
            <img src={award} alt='' />
          </div>
          <button>NFT Artist</button>
        </div> */}
      </div>

      {/*jobposted data */}
      <div className={style.jobpostedCont}>
        <div>Postedon</div>
        <div>01-01-2023</div>
      </div>

      {/* job desc */}
      <div className={style.jobdescCont}>
        <div className={style.jobdescTxt}>Job Discription</div>
        <Readmore className={style.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          provident? Incidunt eligendi magnam molestiae quasi deleniti vel
          distinctio, nihil perferendis dolore fuga voluptatum non adipisci
          corrupti perspiciatis delectus laboriosam numquam. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Obcaecati quis voluptatibus
          culpa. Reiciendis tempora possimus, quia fugiat minima natus ut nulla
          ipsa obcaecati iure ducimusLorem ipsum dolor sit amet consectetur
          adipisicing elit. Perferendis, provident? Incidunt eligendi magnam
          molestiae quasi deleniti vel distinctio, nihil perferendis dolore fuga
          voluptatum non adipisci corrupti perspiciatis delectus laboriosam
          numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Obcaecati quis voluptatibus culpa. Reiciendis tempora possimus, quia
          fugiat minima natus ut nulla ipsa obcaecati iure ducimusLorem ipsum
          dolor sit amet consectetur adipisicing elit. Perferendis, provident?
          Incidunt eligendi magnam molestiae quasi deleniti vel distinctio,
          nihil perferendis dolore fuga voluptatum non adipisci corrupti
          perspiciatis delectus laboriosam numquam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Obcaecati quis voluptatibus culpa.
          Reiciendis tempora possimus, quia fugiat minima natus ut nulla ipsa
          obcaecati iure ducimusLorem ipsum dolor sit amet consectetur
          adipisicing elit. Perferendis, provident? Incidunt eligendi magnam
          molestiae quasi deleniti vel distinctio, nihil perferendis dolore fuga
          voluptatum non adipisci corrupti perspiciatis delectus laboriosam
          numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Obcaecati quis voluptatibus culpa. Reiciendis tempora possimus, quia
          fugiat minima natus ut nulla ipsa obcaecati iure ducimusLorem ipsum
          dolor sit amet consedistinctio ratione tenetur nisi fuga.
        </Readmore>
      </div>
    </div>
  );
};

export default JobCard;
