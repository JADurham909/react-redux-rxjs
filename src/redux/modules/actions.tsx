import { createAction } from '@reduxjs/toolkit';

export const playAction = createAction('PLAY', (payload: any) => ({
  payload,
}));

export const stopAction = createAction('STOP');

export const combineAction = createAction('COMBINE');

export const pingAction = createAction('PING', (payload: any) => ({
  payload,
}));

export const pongAction = createAction('PONG');
