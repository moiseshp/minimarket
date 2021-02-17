import {
  GET_SHOP,
  STORE_SHOP,
  ShopActionTypes,
  ShopState,
} from '../types/shop'

export function getShop(): ShopActionTypes {
  return {
    type: GET_SHOP
  }
}

export function store(payload: ShopState): ShopActionTypes {
  return {
    type: STORE_SHOP,
    payload
  }
}
