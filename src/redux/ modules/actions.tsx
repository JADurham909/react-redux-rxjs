import { createAction } from '@reduxjs/toolkit'

export const playAction = createAction("PLAY",  (payload: any) => {
    return {
      payload
    }
  });

export const stopAction = createAction("STOP");

export const combineAction = createAction("COMBINE");

export const pingAction = createAction("PING",  (payload: any) => {
    return {
      payload
    }
  });

export const pongAction = createAction("PONG");
