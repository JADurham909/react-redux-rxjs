import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from './modules/root';
import { configureStore } from '@reduxjs/toolkit'

const epicMiddleware = createEpicMiddleware();

export default () => {
    const store = configureStore({ 
    reducer: rootReducer, 
    devTools: true,
    middleware: (m) => m().concat(epicMiddleware)
  });

  epicMiddleware.run(rootEpic);

  return store;
}
