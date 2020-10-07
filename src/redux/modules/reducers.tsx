import { createReducer } from '@reduxjs/toolkit';
import { authFulfilledAction, pingAction, pongAction } from './actions';

export default createReducer({ test: 0 }, (builder) => {
  builder
    .addCase(authFulfilledAction, (state, action) => {
      return { ...state, token: action.payload.token };
    })
    .addCase(pingAction, (state, action) => {
      return { ...state, test: action.payload.test };
    })
    .addCase(pongAction, (state, action) => {
      return { ...state, test: action.payload.test };
    });
});
