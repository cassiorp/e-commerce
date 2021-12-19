import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { user } from '../reducers';

const persistConfig = {
  key: 'user',
  storage,
};

const persistedReducer = persistReducer(persistConfig, user);

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  return {
    ...createStore(persistedReducer, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga),
  };
};

const stores = configureStore();

const persistor = persistStore(stores);

export { stores, persistor };
