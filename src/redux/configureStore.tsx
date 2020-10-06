import { createEpicMiddleware } from 'redux-observable';
import { configureStore } from '@reduxjs/toolkit';
import { rootEpic, rootReducer } from './modules/root';

const epicMiddleware = createEpicMiddleware();

export default () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (m) => m().concat(epicMiddleware),
  });

  epicMiddleware.run(rootEpic);

  return store;
};
