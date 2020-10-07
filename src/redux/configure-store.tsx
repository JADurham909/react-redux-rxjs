import { createEpicMiddleware } from 'redux-observable';
import { configureStore, Store } from '@reduxjs/toolkit';
import { rootEpic, rootReducer } from './modules/root';

const epicMiddleware = createEpicMiddleware();

let store: Store | null = null;

export default () => {
  if (store) {
    return store;
  }

  store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (m) => m().concat(epicMiddleware),
  });

  epicMiddleware.run(rootEpic);

  return store;
};
