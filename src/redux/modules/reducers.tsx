import { createReducer } from '@reduxjs/toolkit';
import { authFulfilledAction, pingAction, pongAction } from './actions';

export default createReducer({ test: 0 }, (builder) => {
  builder
    .addCase(authFulfilledAction, (state, action) => {
      console.log('AUTH_FULFILLED', state, action.payload);
      return { ...state, token: action.payload.token };
    })
    .addCase(pingAction, (state, action) => {
      console.log('PING', state, action.payload);
      return { ...state, test: action.payload.test };
    })
    .addCase(pongAction, (state, action) => {
      console.log('PONG', state, action.payload);
      return { ...state, test: action.payload.test };
    });
});
