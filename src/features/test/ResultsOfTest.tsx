import React from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../common/components/button/Button';
import { PATH } from '../../common/enum/pathEnum';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../common/types/ReturnComponentType';

import { resetResults } from './testReducer';

export const ResultsOfTest = (): ReturnComponentType => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const wrongAnswers = useAppSelector(state => state.test.results.wrongAnswers);
   const countOfRightAnswers = useAppSelector(state => state.test.results.countOfRightAnswers);

   const selectTest = (): void => {
      navigate(PATH.MAIN);
   };

   const repeatTest = (): void => {
      dispatch(resetResults());
      navigate(PATH.BACKEND_TEST);
   };

   return (
      <div>
         <h3>Ваш результат теста</h3>
         <span>
            `Вы ответили на {countOfRightAnswers} из {5} вопросов`
         </span>

         <table>
            <thead>
               <tr>
                  <th>Вопрос</th>
                  <th>Неверный ответ</th>
               </tr>
            </thead>

            <tbody>
               {wrongAnswers.map(answer => {
                  return (
                     <tr key={answer.questionNumber}>
                        <td>{answer.questionNumber}</td>
                        <td>{answer.wrongAnswer}</td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
         <Button variant="outlined" onClick={selectTest}>
            Выбрать тест
         </Button>
         <Button variant="contained" onClick={repeatTest}>
            Пройти заново
         </Button>
      </div>
   );
};
