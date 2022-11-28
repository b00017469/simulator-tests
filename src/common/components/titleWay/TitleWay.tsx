import React from 'react';

import { useAppSelector } from '../../hooks/useAppSelector';
import { ReturnComponentType } from '../../types/ReturnComponentType';

import styles from './TitleWay.module.css';

export const TitleWay = (): ReturnComponentType => {
   const way = useAppSelector(state => state.test.way);

   return <h1 className={styles.h}>Тест по напралению {way}</h1>;
};
