import React from 'react';

import circleWrong from '../../../assets/svg/circleWrong.svg';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../common/types/ReturnComponentType';
import styles from '../styles/TableOfWrongAnswers.module.css';

export const TableOfWrongAnswers = (): ReturnComponentType => {
   const wrongAnswers = useAppSelector(state => state.test.results.wrongAnswers);

   return (
      <table className={styles.table}>
         <thead className={styles.head}>
            <tr>
               <th>Вопрос</th>
               <th>Неверный ответ</th>
            </tr>
         </thead>

         <tbody>
            {wrongAnswers.map(answer => {
               return (
                  <tr key={answer.questionNumber}>
                     <td className={styles.number}>{answer.questionNumber}</td>
                     <td className={styles.answers}>
                        <img className={styles.img} src={circleWrong} alt="red circle" />{' '}
                        {answer.wrongAnswer.join('; ')}.
                     </td>
                  </tr>
               );
            })}
         </tbody>
      </table>
   );
};
