import {
  GET_SHOP,
  STORE_SHOP,
  ShopActionTypes,
  IShop,
} from '../types/shop'

export function getShop(): ShopActionTypes {
  return {
    type: GET_SHOP
  }
}

export function store(payload: IShop): ShopActionTypes {
  return {
    type: STORE_SHOP,
    payload
  }
}
