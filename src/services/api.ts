import axios from 'axios'

const api = axios.create({
  // baseURL: `http://jsonplaceholder.typicode.com/`
  // baseURL: `https://api.instantwebtools.net/v1/`
  baseURL: `https://picsum.photos/v2/`
})

export const ProductService = {
  index: (params) => api.get('list?limit=15', { params })
}

export const User = {
  index: () => api.get('users')

  // passenger?size=10&page=1
}