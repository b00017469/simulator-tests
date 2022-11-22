import React from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

import { ResultsOfTest } from '../../../features/test/ResultsOfTest';
import { TestPassPage } from '../../../features/test/TestPassPage';
import { ReturnComponentType } from '../../types/ReturnComponentType';
import { ChooseTest } from '../choose/ChooseTest';
import { PageNotFound } from '../pageNotFound/PageNotFound';

import { PATH } from 'common/enum/pathEnum';

export const Pages = (): ReturnComponentType => {
   return (
      <div>
         <Routes>
            <Route path={PATH.ROOT} element={<Navigate to={PATH.MAIN} />} />
            <Route path={PATH.MAIN} element={<ChooseTest />} />
            <Route path={PATH.PAGE_NOT_FOUND} element={<PageNotFound />} />
            <Route path={PATH.PASS_TEST} element={<TestPassPage />} />
            <Route path={PATH.RESULTS} element={<ResultsOfTest />} />
            <Route path={PATH.BAD_PATH} element={<PageNotFound />} />
         </Routes>
      </div>
   );
};
