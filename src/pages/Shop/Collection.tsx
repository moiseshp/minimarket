import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { ProductService } from 'services/api'
import { Box } from '@material-ui/core'
import Spinner from 'components/Spinner'
import SliderContainer from 'components/SliderContainer'
import ProductCard from 'components/ProductCard'
// import { IProduct } from 'redux/types/product'

const gutter = 16
const boxWidth = 240
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      '&:first-child': {
        [theme.breakpoints.down('sm')]: { paddingLeft: gutter }
      },
      '&:last-child': {
        [theme.breakpoints.down('sm')]: { paddingRight: gutter }
      }
    }
  })
)

type Props = {
  page?: number
}

const Collection : React.FC<Props>= ({ page }) => {
  const classes = useStyles()
  const [items, setItems] = React.useState([])
  const [loading, setLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    ProductService.index({ page })
      .then(response => {
        setItems(response.data)
        setLoading(false)
      })
    return () => (setItems([]))
  }, [])

  if (loading) return <Spinner p={1} />

  return (
    <SliderContainer>
      {items.map((item: any) => (
        <Box
          minWidth={boxWidth}
          key={item.id}
          className={classes.item}
          mr={1}
          pb={3}
        >     
          <ProductCard item={item} post />
        </Box>
      ))}
    </SliderContainer>
  )
}

export default Collection
