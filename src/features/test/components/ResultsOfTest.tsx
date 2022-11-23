import React from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../common/components/button/Button';
import { ProgressBar } from '../../../common/components/progressBar/ProgressBar';
import { PATH } from '../../../common/enum/pathEnum';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../common/types/ReturnComponentType';
import { chooseWay } from '../../../common/utils/chooseWay';
import { getQuestions, resetResults } from '../testsReducer';

const oneHundredPercent = 100;

export const ResultsOfTest = (): ReturnComponentType => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const wrongAnswers = useAppSelector(state => state.test.results.wrongAnswers);
   const countOfRightAnswers = useAppSelector(state => state.test.results.countOfRightAnswers);
   const way = useAppSelector(state => state.test.way);
   const countOfQuestions = useAppSelector(state => state.test.countOfQuestions);

   const percent = (countOfRightAnswers / countOfQuestions) * oneHundredPercent;

   const selectTest = (): void => {
      navigate(PATH.MAIN);
   };

   const repeatTest = (way: string): void => {
      dispatch(resetResults());
      const fileOfQuestions = chooseWay(way);

      if (fileOfQuestions) dispatch(getQuestions(way, fileOfQuestions));
      navigate(PATH.PASS_TEST);
   };

   return (
      <div>
         <ProgressBar percent={percent} />
         <div>
            <h3>Ваш результат теста</h3>
            <span>
               Вы ответили на {countOfRightAnswers} из {countOfQuestions} вопросов
            </span>
         </div>

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
         <Button variant="contained" onClick={() => repeatTest(way)}>
            Пройти заново
         </Button>
      </div>
   );
};
