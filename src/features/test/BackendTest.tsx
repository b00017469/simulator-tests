import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { BackTo } from '../../common/components/backTo/BackTo';
import { Button } from '../../common/components/button/Button';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../common/types/ReturnComponentType';
import { checkAnswer } from '../../common/utils/checkAnswer';

import { TestQuestion } from './TestQuestion';
import { setCheckedAnswer, setIsAnswer } from './testReducer';

export const BackendTest = (): ReturnComponentType => {
   const dispatch = useDispatch();
   const questions = useAppSelector(state => state.test.questionsForBackend);

   const [currentIndex, setCurrentIndex] = useState(0);
   const [indexesOfUnansweredQuestions, setIndexesOfUnansweredQuestions] = useState([
      0, 1, 2, 3, 4,
   ]);

   console.log(currentIndex);

   console.log(indexesOfUnansweredQuestions);
   const countOfQuestions = questions.length;
   const currentQuestion = questions[currentIndex];

   const skipQuestion = (): void => {
      nextQuestion();
   };

   const answerHandler = (): void => {
      const isAnswerRight = checkAnswer(
         currentQuestion.rightIndexesOfAnswers,
         currentQuestion.indexesOfUserAnswers,
      );

      setIndexesOfUnansweredQuestions(indexesOfUnansweredQuestions.filter(i => i !== currentIndex));

      dispatch(setCheckedAnswer(currentQuestion.id, isAnswerRight));
      dispatch(setIsAnswer(currentQuestion.id, true));

      nextQuestion();
      if (indexesOfUnansweredQuestions.length <= 1) alert('finish');
   };

   const nextQuestion = (): void => {
      if (indexesOfUnansweredQuestions.length > 1) {
         const nextIndex = indexesOfUnansweredQuestions.indexOf(currentIndex) + 1;

         if (nextIndex < indexesOfUnansweredQuestions.length)
            setCurrentIndex(indexesOfUnansweredQuestions[nextIndex]);
         else setCurrentIndex(indexesOfUnansweredQuestions[0]);
      }
   };

   console.log(questions);

   return (
      <div>
         <BackTo />
         <h3>Тест по напралению Back-end</h3>
         <div>
            {currentIndex + 1} - {countOfQuestions} ******
         </div>
         <TestQuestion
            questionText={currentQuestion.questionText}
            answerOptions={currentQuestion.answerOptions}
            idQuestion={currentQuestion.id}
         />

         <div>
            <Button variant="buttonOutlined" onClick={skipQuestion}>
               Пропустить вопрос
            </Button>
            <Button variant="buttonContained" onClick={answerHandler}>
               Ответить
            </Button>
         </div>
      </div>
   );
};
