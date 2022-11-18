import React from 'react';

import { ReturnComponentType } from '../../common/types/ReturnComponentType';

type Props = {
   questionText: string;
   answerOptions: string[];
   defaultChecked: boolean;
};

export const TestQuestion = ({
   questionText,
   answerOptions,
   defaultChecked,
}: Props): ReturnComponentType => {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const onChangeCheck = (obj: any): void => {
      // console.log(obj);
   };

   return (
      <div>
         {questionText}
         <ul>
            {answerOptions.map((answer, index) => (
               <li key={answer}>
                  <input
                     type="checkbox"
                     checked={defaultChecked}
                     onChange={event =>
                        onChangeCheck({ answer, index, selected: event.currentTarget.checked })
                     }
                  />
                  <span>{answer}</span>
               </li>
            ))}
         </ul>
      </div>
   );
};
