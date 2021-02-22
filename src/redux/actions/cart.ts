import {
  GET_CART,
  STORE_CART,
  ADD_CART,
  REMOVE_CART,
  CHANGE_QUANTITY_CART,
  CartActionTypes,
  ICart,
  IQuantity
} from 'redux/types/cart'
import { IProduct } from 'redux/types/product'

export function getCart(): CartActionTypes {
  return {
    type: GET_CART
  }
}

export function store(payload: ICart): CartActionTypes {
  return {
    type: STORE_CART,
    payload
  }
}

export function add(payload: IProduct): CartActionTypes {
  return {
    type: ADD_CART,
    payload
  }
}

export function remove(payload: IProduct): CartActionTypes {
  return {
    type: REMOVE_CART,
    payload
  }
}

export function changeQuantity(payload: IQuantity): CartActionTypes {
  return {
    type: CHANGE_QUANTITY_CART,
    payload
  }
}