import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { loadState, saveState } from 'utils/localStorage'
import createSagaMiddleware from 'redux-saga'
import throttle from 'lodash/throttle'
import reducers from './reducers'
import sagas  from './sagas'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose // eslint-disable-line
const sagaMiddleware = createSagaMiddleware()
const persistedState = loadState()

export const store = createStore(
  combineReducers(reducers),
  persistedState,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)

store.subscribe(throttle(() => {
  saveState({
    cart: store.getState().cart
    // user: store.getState().user
  })
}, 1000))

// const persistedState = loadState()
// if (persistedState) {
//   store.dispatch(cartActions.store(persistedState.cart))
//   // store.dispatch(userActions.store(persistedState.user))
// }

sagaMiddleware.run(sagas)