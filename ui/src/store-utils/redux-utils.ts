import { Reducer, Action } from 'redux';

type ReducersMap<TState, TAction extends Action> = {
  [key: string]: Reducer<TState, TAction>;
};

export type ActionInjectableReducer<TState, TAction extends Action> = Reducer<
  TState,
  TAction
> & {
  // eslint-disable-next-line no-unused-vars
  updateActionReducers(reducers: ReducersMap<TState, TAction>): void;
};

export function createActionReducer<TState = any, TAction extends Action = any>(
  initialState?: TState,
): ActionInjectableReducer<TState, TAction> {
  const reducerByAction: ReducersMap<TState, TAction> = {};

  const res = function actionReducer(
    // eslint-disable-next-line default-param-last
    state: TState = initialState as any,
    action: TAction,
  ): TState {
    const rdc = reducerByAction[action.type];
    if (rdc) return rdc(state, action);
    return state;
  } as ActionInjectableReducer<TState, TAction>;

  res.updateActionReducers = function (newReducers: {
    [actionType: string]: Reducer<TState, TAction>;
  }) {
    Object.assign(reducerByAction, newReducers);
  };

  return res;
}
