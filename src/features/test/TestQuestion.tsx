import React from 'react';

import { useDispatch } from 'react-redux';

import { ReturnComponentType } from '../../common/types/ReturnComponentType';

import { setIndexesOfUserAnswers } from './testReducer';

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

   const onChangeCheck = (index: number, isChecked: boolean): void => {
      if (isChecked) dispatch(setIndexesOfUserAnswers(idQuestion, index));
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
      </div>
   );
};
