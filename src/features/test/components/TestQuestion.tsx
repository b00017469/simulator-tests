import React from 'react';

import { useDispatch } from 'react-redux';

import { Button } from '../../../common/components/button/Button';
import { ReturnComponentType } from '../../../common/types/ReturnComponentType';
import { setIndexesOfUserAnswers } from '../testsReducer';

type Props = {
   questionText: string;
   answerOptions: string[];
   idQuestion: string;
   skipQuestion: () => void;
   answerHandler: () => void;
};

export const TestQuestion = ({
   questionText,
   answerOptions,
   idQuestion,
   skipQuestion,
   answerHandler,
}: Props): ReturnComponentType => {
   const dispatch = useDispatch();

   const onChangeCheck = (index: 0 | 1 | 2 | 3, isChecked: boolean): void => {
      dispatch(setIndexesOfUserAnswers(idQuestion, { [index]: isChecked }));
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

         <div>
            <Button variant="outlined" onClick={skipQuestion}>
               Пропустить вопрос
            </Button>
            <Button variant="contained" onClick={answerHandler}>
               Ответить
            </Button>
         </div>
      </div>
   );
};
