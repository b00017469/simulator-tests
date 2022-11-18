import React from 'react';

import { useNavigate } from 'react-router-dom';

import style from '../../../app/App.module.css';
import backend from '../../../assets/svg/backend.svg';
import frontend from '../../../assets/svg/frontend.svg';
import { PATH } from '../../enum/pathEnum';
import { ReturnComponentType } from '../../types/ReturnComponentType';

export const ChooseTest = (): ReturnComponentType => {
   const navigate = useNavigate();
   const chooseBackend = (): void => {
      navigate(PATH.BACKEND_TEST);
   };

   return (
      <div className={style.icons}>
         <h3>Выбери направление</h3>
         <div>
            <img src={frontend} alt="frontend" />
         </div>
         <div>
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events */}
            <img src={backend} alt="backend" onClick={chooseBackend} />
         </div>
      </div>
   );
};
