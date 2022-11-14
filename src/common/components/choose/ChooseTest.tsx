import React from 'react';

import style from '../../../app/App.module.css';
import backend from '../../../assets/svg/backend.svg';
import frontend from '../../../assets/svg/frontend.svg';
import { ReturnComponentType } from '../../types/ReturnComponentType';

export const ChooseTest = (): ReturnComponentType => {
   return (
      <div className={style.icons}>
         <div>
            <img src={frontend} alt="frontend" />
         </div>
         <div>
            <img src={backend} alt="backend" />
         </div>
      </div>
   );
};
