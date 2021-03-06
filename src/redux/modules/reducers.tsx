import { createReducer } from '@reduxjs/toolkit';
import { pingAction, pongAction } from './actions';

export default createReducer({}, (builder) => {
  builder
    .addCase(pingAction, (state, action) => {
      console.log('PING', state, action.payload);
    })
    .addCase(pongAction, (state, action) => {
      console.log('PONG', state, action.payload);
    });
});
