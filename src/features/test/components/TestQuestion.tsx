import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { Button } from '../../../common/components/button/Button';
import { ReturnComponentType } from '../../../common/types/ReturnComponentType';
import { setIndexesOfUserAnswers } from '../reducer/testsReducer';
import style from '../styles/TestQuestion.module.css';

type Props = {
   questionText: string;
   answerOptions: string[];
   idQuestion: string;
   skipQuestion: () => void;
   answerClick: (userAnswer: number[]) => void;
};

export const TestQuestion = ({
   questionText,
   answerOptions,
   idQuestion,
   skipQuestion,
   answerClick,
}: Props): ReturnComponentType => {
   const dispatch = useDispatch();

   const [userAnswer, setUserAnswer] = useState<number[]>([]);

   const onChangeCheck = (index: number, isChecked: boolean): void => {
      if (isChecked) setUserAnswer([...userAnswer, index]);
      else setUserAnswer(userAnswer.filter(answer => answer !== index));
   };

   const answerHandle = (): void => {
      answerClick(userAnswer);
      dispatch(setIndexesOfUserAnswers(idQuestion, userAnswer));
      setUserAnswer([]);
   };

   const skipHandle = (): void => {
      skipQuestion();
      setUserAnswer([]);
   };

   return (
      <div className={style.wrapper}>
         <h3 className={style.h}>{questionText}</h3>
         {answerOptions.map((answer, index) => (
            <div key={answer} className={style.answer}>
               <label>
                  <input
                     className={style.checkbox}
                     type="checkbox"
                     onChange={event => onChangeCheck(index, event.currentTarget.checked)}
                  />
                  {answer}
               </label>
            </div>
         ))}

         <div className={style.buttons}>
            <Button variant="outlined" onClick={skipHandle}>
               Пропустить вопрос
            </Button>
            <Button variant="contained" onClick={answerHandle}>
               Ответить
            </Button>
         </div>
      </div>
   );
};
