import { combineReducers, createStore } from 'redux';

import { testsReducer } from '../features/test/reducer/testsReducer';

const rootReducer = combineReducers({
   test: testsReducer,
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;
