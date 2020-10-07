import {
  mergeMap, map, filter, delay, distinctUntilChanged, concat,
} from 'rxjs/operators';
import {
  of, zip,
} from 'rxjs';
import { ActionsObservable, ofType } from 'redux-observable';
import {
  authFulfilledAction, pingAction, pongAction, actionMapSecondAction,
} from './actions';
import { authSelector, actionMapFirstSelector } from './selectors';

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
    (action) => of(pingAction(action.payload)).pipe(
      concat(
        of(() => console.log('TEST', state$.value)),
        of(pongAction({ test: (state$.value) + 900 })),
      ),
    ),
  ),
);

export const actionMap = (action$: ActionsObservable<any>, state$: any) => action$.pipe(
  ofType('ACTION_MAP_FIRST'),
  mergeMap(() => of(actionMapSecondAction({ actionMap: actionMapFirstSelector(state$.value) }))),
);
