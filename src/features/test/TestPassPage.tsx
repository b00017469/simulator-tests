import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { BackTo } from '../../common/components/backTo/BackTo';
import { CircleSvg } from '../../common/components/circleSvg/CircleSvg';
import { PATH } from '../../common/enum/pathEnum';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../common/types/ReturnComponentType';
import { checkAnswer } from '../../common/utils/checkAnswer';

import { TestQuestion } from './components/TestQuestion';
import { getResults, setCheckedAnswer } from './reducer/testsReducer';
import styles from './styles/TestPassPage.module.css';

export const TestPassPage = (): ReturnComponentType => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const questions = useAppSelector(state => state.test.questions);
   const countOfQuestions = useAppSelector(state => state.test.countOfQuestions);
   const way = useAppSelector(state => state.test.way);

   const [currentIndex, setCurrentIndex] = useState(0);
   const [indexesOfUnansweredQuestions, setIndexesOfUnansweredQuestions] = useState([
      0, 1, 2, 3, 4,
   ]);

   const currentQuestion = questions[currentIndex];
   const isTestEnded = indexesOfUnansweredQuestions.length < 1;

   const skipQuestion = (): void => {
      nextQuestion();
   };

   const answerHandler = (userAnswer: number[]): void => {
      const isAnswerRight = checkAnswer(currentQuestion.rightIndexesOfAnswers, userAnswer);

      dispatch(setCheckedAnswer(currentQuestion.id, isAnswerRight));

      setIndexesOfUnansweredQuestions(indexesOfUnansweredQuestions.filter(i => i !== currentIndex));

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

   useEffect(() => {
      if (isTestEnded) {
         dispatch(getResults());
         navigate(PATH.RESULTS);
      }
   }, [dispatch, isTestEnded, navigate]);

   return (
      <div className={styles.wrapper}>
         <BackTo />
         <h1 className={styles.h}>Тест по напралению {way}</h1>

         <div className={styles.number}>
            <span>
               {currentIndex + 1} из {countOfQuestions}
            </span>
            {questions.map(question => (
               <CircleSvg
                  key={question.id}
                  isAnswerRight={question.isAnswerRight}
                  currentQuestionId={currentQuestion.id}
                  questionId={question.id}
               />
            ))}
         </div>

         <TestQuestion
            questionText={currentQuestion.questionText}
            answerOptions={currentQuestion.answerOptions}
            idQuestion={currentQuestion.id}
            skipQuestion={skipQuestion}
            answerClick={answerHandler}
         />
      </div>
   );
};
