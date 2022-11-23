import React from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import backend from '../../../assets/svg/backend.svg';
import frontend from '../../../assets/svg/frontend.svg';
import { getQuestions } from '../../../features/test/testsReducer';
import { PATH } from '../../enum/pathEnum';
import { WAY } from '../../enum/wayEnum';
import { ReturnComponentType } from '../../types/ReturnComponentType';
import { chooseWay } from '../../utils/chooseWay';

import styles from './ChooseTest.module.css';

export const ChooseTest = (): ReturnComponentType => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const beginTest = (way: string): void => {
      const fileOfQuestions = chooseWay(way);

      if (fileOfQuestions) dispatch(getQuestions(way, fileOfQuestions));

      navigate(PATH.PASS_TEST);
   };

   return (
      <div className={styles.wrapper}>
         <div className={styles.h}>Выбери направление</div>

         <div className={styles.icons}>
            <div className={styles.icon}>
               {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
               <img src={frontend} alt="frontend" onClick={() => beginTest(WAY.FRONT)} />
            </div>

            <div className={styles.icon}>
               {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events */}
               <img src={backend} alt="backend" onClick={() => beginTest(WAY.BACK)} />
            </div>
         </div>
      </div>
   );
};
