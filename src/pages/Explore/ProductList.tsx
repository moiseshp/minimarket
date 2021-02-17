import React from 'react'
import { useLocation } from 'react-router-dom'
import { ProductService } from 'services/api'
import { Box, Container, LinearProgress } from '@material-ui/core'
import ProductCard from 'components/ProductCard'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ProductList = () => {
  const query = useQuery()
  const [items, setItems] = React.useState([])
  const [loading, setLoading] = React.useState<boolean>(true)
  const category = query.get('category')
  const search = query.get('search')

  React.useEffect(() => {
    const numbers = {
      Verduras: 2,
      Abarrotes: 3,
      Regalos: 4,
      Hamburguesas: 5
    }
    console.info(category)
    const page = category ? numbers[category] : 50
    setLoading(true)
    ProductService.index({ page })
      .then(response => {
        setItems(response.data)
        setLoading(false)
      })
  }, [category, search])

  if (loading) return <LinearProgress />

  return (
    <Container>
      {items.map((item: any) => (
        <Box key={item.id} mb={1}>
          <ProductCard item={item} />
        </Box>
      ))}
    </Container>
  )
}

export default ProductList
