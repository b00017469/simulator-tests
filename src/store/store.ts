import { combineReducers, createStore } from 'redux';

import { testReducer } from '../features/test/testReducer';

const rootReducer = combineReducers({
   test: testReducer,
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;
