import { createReducer } from '@reduxjs/toolkit';
import {
  authFulfilledAction, pingAction, pongAction, actionMapFirstAction, actionMapSecondAction,
} from './actions';

export default createReducer({ test: 0 }, (builder) => {
  builder
    .addCase(authFulfilledAction, (state, action) => ({ ...state, token: action.payload.token }))
    .addCase(pingAction, (state, action) => ({ ...state, test: action.payload.test }))
    .addCase(pongAction, (state, action) => ({ ...state, test: action.payload.test }))
    .addCase(actionMapFirstAction,
      (state, action) => ({ ...state, actionMapFirst: action.payload.actionMap }))
    .addCase(actionMapSecondAction,
      (state, action) => ({ ...state, actionMapSecond: action.payload.actionMap }));
});
