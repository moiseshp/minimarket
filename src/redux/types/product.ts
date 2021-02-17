interface IPhoto {
  small: string
  medium: string
  large: string
}

export default interface IProduct {
  uuid?: string
  name?: string
  photo?: IPhoto
  description?: string
  price?: string
  crossedOutPrice?: string
}
