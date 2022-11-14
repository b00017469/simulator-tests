import React from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';

import style from './Header.module.css';

export const Header = (): ReturnComponentType => {
   return (
      <header className={style.header}>
         <h3>SimulatorTest</h3>
      </header>
   );
};
