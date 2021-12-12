import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { user } from '../reducers';
import rootSaga from '../sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  return {
    ...createStore(user, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga),
  };
};

const stores = configureStore();

export { stores };
