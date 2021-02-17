import IOwner from './owner'
import ICategory from './category'
export const GET_SHOP = 'GET_SHOP'
export const STORE_SHOP = 'STORE_SHOP'

export interface ShopState {
  uuid?: string
  name?: string
  slug?: string
  status?: boolean
  address?: string
  description?: string
  deliveryTime?: string
  owner?: IOwner | null
  searchText?: string
  searchIsActive?: boolean
  isLoading?: boolean
  hasError?: boolean
  category?: {
    items: Array<ICategory>
  }
}

interface GetShopAction {
  type: typeof GET_SHOP
}

interface StoreShopAction {
  type: typeof STORE_SHOP
  payload: ShopState
}

export type ShopActionTypes = GetShopAction | StoreShopAction
