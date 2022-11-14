import React from 'react';

import { Header } from '../common/components/header/Header';
import { Pages } from '../common/components/pages/Pages';
import { ReturnComponentType } from '../common/types/ReturnComponentType';

import style from './App.module.css';

const App = (): ReturnComponentType => {
   return (
      <div className={style.app}>
         <Header />
         <h3>Выбери направление</h3>
         <Pages />
      </div>
   );
};

export default App;
