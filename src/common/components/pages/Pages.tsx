import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { ReturnComponentType } from '../../types/ReturnComponentType';
import { ChooseTest } from '../choose/ChooseTest';
import { PageNotFound } from '../pageNotFound/PageNotFound';

import { PATH } from 'common/enum/pathEnum';

export const Pages = (): ReturnComponentType => {
   return (
      <div>
         <Routes>
            <Route path="/" element={<ChooseTest />} />
            <Route path={PATH.PAGE_NOT_FOUND} element={<PageNotFound />} />
            <Route path="/frontend_test" />
            <Route path="/backend_test" />
            <Route path="*" element={<Navigate to={PATH.PAGE_NOT_FOUND} />} />
         </Routes>
      </div>
   );
};
