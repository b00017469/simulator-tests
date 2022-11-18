import { combineReducers, createStore } from 'redux';

import { testReducer } from '../features/testReducer';

const rootReducer = combineReducers({
   test: testReducer,
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;
