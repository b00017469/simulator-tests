import React from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';

export const CircleSvg = (): ReturnComponentType => {
   return (
      <svg width="10" height="10">
         <circle cx="5" cy="5" r="4" stroke="#569CCF" strokeWidth="1" fill="yellow" />
      </svg>
   );
};
