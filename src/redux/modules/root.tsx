import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import {
  auth, play, stop, combine, actionMap,
} from './epics';
import pingPong from './reducers';

export const rootEpic = combineEpics(
  auth,
  play,
  stop,
  combine,
  actionMap,
);

export const rootReducer = combineReducers({
  pingPong,
});
