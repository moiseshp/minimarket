import { IProduct } from './product'

export const GET_CART = 'GET_CART'
export const STORE_CART = 'STORE_CART'
export const ADD_CART = 'ADD_CART'
export const REMOVE_CART = 'REMOVE_CART'
export const CHANGE_QUANTITY_CART = 'CHANGE_QUANTITY_CART'

export interface IQuantity {
  id?: number
  cart?: number
}

export interface ICart {
  date?: string
  isLoading?: boolean
  payment?: number
  products: Array<IProduct>
}

interface GetCartAction {
  type: typeof GET_CART
}

interface StoreCartAction {
  type: typeof STORE_CART
  payload: ICart
}

interface AddCartAction {
  type: typeof ADD_CART
  payload: IProduct
}

interface RemoveCartAction {
  type: typeof REMOVE_CART
  payload: IProduct
}

interface ChangeQuantityCartAction {
  type: typeof CHANGE_QUANTITY_CART
  payload: IQuantity
}

export type CartActionTypes = GetCartAction
  | AddCartAction 
  | StoreCartAction 
  | RemoveCartAction 
  | ChangeQuantityCartAction
