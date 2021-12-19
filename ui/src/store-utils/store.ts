import {
  createStore,
  combineReducers,
  ReducersMapObject,
} from 'redux';

type StoreInjectable = ReturnType<typeof createStore> & {
    // eslint-disable-next-line no-unused-vars
    injectReducers(reducers: ReducersMapObject): void;
  };

function configureStore() {
  const reducersMap: ReducersMapObject = {};

  const store = createStore(
    combineReducers(reducersMap),
  ) as StoreInjectable;
  store.injectReducers = function (reducers: ReducersMapObject) {
    Object.assign(reducersMap, reducers);
    this.replaceReducer(combineReducers(reducersMap));
  };

  return store;
}

const store = configureStore();

export default store;
