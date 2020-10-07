import { mergeMap, concat, map, filter, delay, tap, distinctUntilChanged } from 'rxjs/operators';
import { of, zip, interval, from } from 'rxjs';
import { ActionsObservable, ofType } from 'redux-observable';
import {
  authFulfilledAction, playAction, pingAction, pongAction, stopAction,
} from './actions';
import { testSelector, authSelector } from './selectors';

export const auth = (action$: ActionsObservable<any>) => action$.pipe(
  ofType('AUTH_START'),
  mergeMap((a) => of(a).pipe(delay(5000), map(() => authFulfilledAction({ token: 'X' })))),
);

export const play = (action$: ActionsObservable<any>, state$: any) => {

  const play$ = action$.pipe(ofType('PLAY'));

  const auth$ = state$.pipe(
    map(authSelector),
    distinctUntilChanged(),
    filter(Boolean),
  );

  const combined$ = zip(play$, auth$);

  return combined$.pipe(
    mergeMap(([a]) => of(pingAction(a.payload))),
  );

};

export const stop = (action$: ActionsObservable<any>) => action$.pipe(
  ofType('STOP'),
  mergeMap((action) => of(pongAction(action.payload))),
);

export const combine = (action$: ActionsObservable<any>, state$: any) => action$.pipe(
  ofType('COMBINE'),
  mergeMap(
    (action) => of(playAction(action.payload)).pipe(
      concat(
        of(stopAction({ test: testSelector(state$.value) + 1 })),
      ),
    ),
  ),
);
