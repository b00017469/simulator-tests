import React from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';
import { setProgress } from '../../utils/setProgress';

import styles from './ProgressBar.module.css';

type Props = {
   percent: number;
};

export const ProgressBar = ({ percent }: Props): ReturnComponentType => {
   setProgress(percent);

   return (
      <div className={styles.circleWrap}>
         <div className={styles.circle}>
            <div className={`${styles.mask} ${styles.full}`}>
               <div className={styles.fill} />
            </div>
            <div className={`${styles.mask} ${styles.half}`}>
               <div className={styles.fill} />
            </div>
            <div className={styles.insideCircle}> {percent}%</div>
         </div>
      </div>
   );
};
