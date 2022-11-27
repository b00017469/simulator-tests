import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { Button } from '../../../common/components/button/Button';
import { ReturnComponentType } from '../../../common/types/ReturnComponentType';
import { setIndexesOfUserAnswers } from '../testsReducer';

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

   return (
      <div>
         {questionText}
         <ul>
            {answerOptions.map((answer, index) => (
               <li key={answer}>
                  <input
                     type="checkbox"
                     onChange={event => onChangeCheck(index, event.currentTarget.checked)}
                  />
                  <span>{answer}</span>
               </li>
            ))}
         </ul>

         <div>
            <Button variant="outlined" onClick={skipQuestion}>
               Пропустить вопрос
            </Button>
            <Button variant="contained" onClick={answerHandle}>
               Ответить
            </Button>
         </div>
      </div>
   );
};
