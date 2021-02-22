import { put, call, takeLatest } from 'redux-saga/effects'
import { GET_SHOP } from 'redux/types/shop'
import * as shopActions from 'redux/actions/shop'
import mockupShop from 'utils/mockapi/shop.json'  
function* getShop() {
  try {
    const shop = yield call(() => mockupShop)
    if (!shop) {
      console.info('Not shop enalable')
      return
    }
    yield put(shopActions.store(shop))
  } catch (error) {
    console.error(error)
    // yield put(gameActions.failure(error))
  }
}

export default function* shop() {
  yield takeLatest(GET_SHOP, getShop)
}