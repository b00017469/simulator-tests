import React from 'react';

import { useNavigate } from 'react-router-dom';

import svgError from '../../../assets/svg/404.svg';
import { PATH } from '../../enum/pathEnum';
import { ReturnComponentType } from '../../types/ReturnComponentType';
import { Button } from '../button/Button';

import styles from './styles/PageNotFound.module.css';

export const PageNotFound = (): ReturnComponentType => {
   const navigate = useNavigate();

   const onBackToHomePageClick = (): void => {
      navigate(PATH.MAIN);
   };

   return (
      <div className={styles.container}>
         <div className={styles.bloc}>
            <h2>Ooops!</h2>
            <span>Sorry! Page not found!</span>
            <Button
               className={styles.buttonSignUp}
               type="button"
               variant="outlined"
               onClick={onBackToHomePageClick}
            >
               Back to home page
            </Button>
         </div>
         <img src={svgError} alt="Error" />
      </div>
   );
};
