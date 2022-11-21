import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { BackTo } from '../../common/components/backTo/BackTo';
import { PATH } from '../../common/enum/pathEnum';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../common/types/ReturnComponentType';
import { checkAnswer } from '../../common/utils/checkAnswer';

import { TestQuestion } from './TestQuestion';
import { getResults, setCheckedAnswer, setIsAnswer } from './testReducer';

export const BackendTest = (): ReturnComponentType => {
   const navigate = useNavigate();
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
   const isTestEnded = indexesOfUnansweredQuestions.length < 1;

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
   useEffect(() => {
      if (isTestEnded) {
         dispatch(getResults());
         navigate(PATH.RESULTS);
      }
   }, [dispatch, isTestEnded, navigate]);

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
            skipQuestion={skipQuestion}
            answerHandler={answerHandler}
         />
      </div>
   );
};
