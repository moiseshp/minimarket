import { all } from 'redux-saga/effects'
import shop from './shop'

export default function* sagas() {
  yield all([
    shop()
  ])
}
