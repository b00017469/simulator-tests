import React, { useState } from 'react';

import { BackTo } from '../../common/components/backTo/BackTo';
import { Button } from '../../common/components/button/Button';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../common/types/ReturnComponentType';

import { TestQuestion } from './TestQuestion';

export const BackendTest = (): ReturnComponentType => {
   const questions = useAppSelector(state => state.test.questionsForBackend);

   const [currentIndex, setCurrentIndex] = useState(0);

   const countOfQuestions = questions.length;

   const answerHandler = (): void => {
      if (countOfQuestions - 1 > currentIndex) setCurrentIndex(currentIndex + 1);
   };
   // const selectAnswer = (): void => {};

   return (
      <div>
         <BackTo />
         <h3>Тест по напралению Back-end</h3>
         <div>
            {currentIndex + 1} - {countOfQuestions} ******
         </div>
         <TestQuestion
            questionText={questions[currentIndex].questionText}
            answerOptions={questions[currentIndex].answerOptions}
            defaultChecked={false}
         />
         <div>
            <Button variant="buttonOutlined">Пропустить вопрос</Button>
            <Button variant="buttonContained" onClick={answerHandler}>
               Ответить
            </Button>
         </div>
      </div>
   );
};
