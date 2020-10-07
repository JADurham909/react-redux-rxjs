import { createAction } from '@reduxjs/toolkit';

export const authStartAction = createAction('AUTH_START');

export const authFulfilledAction = createAction('AUTH_FULFILLED', (payload: { token: string}) => ({
  payload,
}));

export const combineAction = createAction('COMBINE');

export const playAction = createAction('PLAY', (payload: {test: number}) => ({
  payload,
}));

export const stopAction = createAction('STOP', (payload: {test: number}) => ({
  payload,
}));

export const pingAction = createAction('PING', (payload: {test: number}) => ({
  payload,
}));

export const pongAction = createAction('PONG', (payload: {test: number}) => ({
  payload,
}));
