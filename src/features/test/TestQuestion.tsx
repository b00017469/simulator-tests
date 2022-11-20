import React from 'react';

import { useDispatch } from 'react-redux';

import { ReturnComponentType } from '../../common/types/ReturnComponentType';

import { Answers, setIndexesOfUserAnswers } from './testReducer';

type Props = {
   questionText: string;
   answerOptions: string[];
   idQuestion: string;
};

export const TestQuestion = ({
   questionText,
   answerOptions,
   idQuestion,
}: Props): ReturnComponentType => {
   const dispatch = useDispatch();

   const answers: Answers = { 0: false, 1: false, 2: false, 3: false };

   const onChangeCheck = (index: 0 | 1 | 2 | 3, isChecked: boolean): void => {
      answers[index] = isChecked;

      dispatch(setIndexesOfUserAnswers(idQuestion, answers));
   };

   return (
      <div>
         {questionText}
         <ul>
            {answerOptions.map((answer, index) => (
               <li key={answer}>
                  <input
                     type="checkbox"
                     onChange={event =>
                        onChangeCheck(index as 0 | 1 | 2 | 3, event.currentTarget.checked)
                     }
                  />
                  <span>{answer}</span>
               </li>
            ))}
         </ul>
      </div>
   );
};
