import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import sagas  from './sagas'
// import * as userActions from './actions/user'
// import { APP_ID } from '../constants/app'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose // eslint-disable-line
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  combineReducers(reducers),
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)

const storage = localStorage.getItem('storage ready!!!')
if (storage) {
  // const user = JSON.parse(storage)
  // console.info(user)
  // store.dispatch(userActions.update(user))
}

sagaMiddleware.run(sagas)