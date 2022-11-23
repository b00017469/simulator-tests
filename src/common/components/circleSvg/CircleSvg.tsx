import React from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';

type Props = {
   isAnswerRight: boolean | null;
   currentQuestionId: string;
   questionId: string;
};

export const CircleSvg = ({
   isAnswerRight,
   currentQuestionId,
   questionId,
}: Props): ReturnComponentType => {
   let bgColor = '#C4C4C4';
   let strokeWidth = '0';

   if (isAnswerRight === true) bgColor = '#3BB98A';
   if (isAnswerRight === false) bgColor = '#CF6256';
   if (currentQuestionId === questionId) {
      bgColor = '#fcfbfb';
      strokeWidth = '1';
   }

   return (
      <svg width="12" height="12" style={{ marginLeft: '4px' }}>
         <circle cx="6" cy="6" r="5" stroke="#569CCF" strokeWidth={strokeWidth} fill={bgColor} />
      </svg>
   );
};
