/* eslint-disable react/prop-types */
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import { configureStore } from '@reduxjs/toolkit';
import { rootEpic, rootReducer } from './redux/modules/root';

const epicMiddleware = createEpicMiddleware();
const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (m) => m().concat(epicMiddleware),
  });

  epicMiddleware.run(rootEpic);

  return store;
};

function render(
  ui,
  {
    initialState,
    store = createStore(),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
