import { mergeMap, concat} from 'rxjs/operators';
import { of } from 'rxjs';
import { ActionsObservable, ofType } from "redux-observable";
import { playAction, pingAction, pongAction, stopAction } from './actions';

export const play = (action$: ActionsObservable<any>) => {
    return action$.pipe(
        ofType('PLAY'),
        mergeMap((action) => of(pingAction(action.payload))));
};

export const stop = (action$: ActionsObservable<any>) => {
    return action$.pipe(
    ofType('STOP'),
    mergeMap(() => of(pongAction())));
};

export const combine = (action$: ActionsObservable<any>) => {
    return action$.pipe(
        ofType('COMBINE'),
        mergeMap(
          action => of(playAction(action.payload)).pipe(
            concat(
              of(stopAction())
            )
          )
        )
      );
};
