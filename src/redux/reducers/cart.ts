import {
  GET_CART,
  STORE_CART,
  ADD_CART,
  REMOVE_CART,
  CHANGE_QUANTITY_CART,
  CartActionTypes,
  ICart
} from 'redux/types/cart'

export const total = (state) => state.products.length

const initialState: ICart = {
  date: '',
  isLoading: false,
  payment: 0.00,
  products: []
}

export default function cart(
  state = initialState, 
  action: CartActionTypes
): ICart {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        isLoading: true
      }
    case STORE_CART:
      return {
        ...state,
        ...action.payload,
        isLoading: false
      }
    case ADD_CART:
      return add(state, action)
    case REMOVE_CART:
      return remove(state, action)
    case CHANGE_QUANTITY_CART:
      return changeQuantity(state, action)
    default:
      return state
  }
}

const add = (state, action) => {
  const products = [
    ...state.products, 
    { ...action.payload, cart: 1 }
  ]
  const payment = getPayment(products)
  return {
    ...state,
    products,
    payment
  }
}

const remove = (state, action) => {
  const products = state.products.filter(({ id }) => id !== action.payload.id)
  const payment = getPayment(products)
  return {
    ...state,
    products,
    payment
  }
}

const changeQuantity = (state, action) => {
  const products = state.products.map((product) => {
    if (product.id === action.payload.id) {
      product.cart = action.payload.cart
    }
    return product
  })
  const payment = getPayment(products)
  return {
    ...state,
    products,
    payment
  }
}

const getPayment = (products) => products.reduce(( total, { cart, price }) => total + (cart * price), 0)
