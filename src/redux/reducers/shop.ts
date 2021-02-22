import {
  GET_SHOP,
  STORE_SHOP,
  ShopActionTypes,
  IShop,
} from '../types/shop'

const initialState: IShop = {
  uuid: '',
  name: '',
  slug: '',
  status: false,
  address: '',
  description: '',
  deliveryTime: '',
  owner: null,
  category: {
    items: []
  },
  searchText: '',
  searchIsActive: false,
  isLoading: false,
  hasError: false
}

export default function shop(
  state = initialState, 
  action: ShopActionTypes
): IShop {
  switch (action.type) {
    case GET_SHOP:
      return {
        ...state,
        isLoading: true
      }
    case STORE_SHOP:
      return {
        ...state,
        ...action.payload,
        isLoading: false
      }
    default:
      return state
  }
}