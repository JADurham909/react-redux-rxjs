import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { play, stop, combine } from './epics';
import pingPong from './reducers';

export const rootEpic = combineEpics(
  play,
  stop,
  combine,
);

export const rootReducer = combineReducers({
  pingPong,
});
