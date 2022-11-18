import React from 'react';

import { NavLink } from 'react-router-dom';

import arrow from '../../../assets/svg/arrow.svg';
import { PATH } from '../../enum/pathEnum';
import { ReturnComponentType } from '../../types/ReturnComponentType';

import style from './styles/BackTo.module.scss';

export const BackTo = (): ReturnComponentType => {
   return (
      <NavLink to={PATH.MAIN} className={style.navLink}>
         <span className={style.back}>
            <img src={arrow} alt="arrow" className={style.arrow} />
            Назад к выбору теста
         </span>
      </NavLink>
   );
};
