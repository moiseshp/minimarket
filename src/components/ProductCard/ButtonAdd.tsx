import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as cartActions from 'redux/actions/cart'
import { Box, Button, IconButton } from '@material-ui/core'
import { Remove as RemoveIcon, Add as AddIcon } from '@material-ui/icons'
import { IProduct } from 'redux/types/product'
import { useStyles } from './ButtonAdd.styles'

type Props = {
  item: IProduct
}
const ButtonAdd: React.FC<Props> = ({ item }) => {
  const [product, setProduct] = React.useState<IProduct>()
  const { cart } = useSelector((state: any) => state)
  const dispatch = useDispatch()
  const classes = useStyles()

  React.useEffect(() => {
    const getProduct = cart.products.filter(({ id }) => id === item.id)
    setProduct(getProduct[0])
    console.info('update')
  }, [cart.products])

  const handleAdd = () => {
    dispatch(cartActions.add(item))
  }

  const handleIncrease = (cart) => {
    dispatch(cartActions.changeQuantity({
      id: item.id,
      cart: ++cart
    }))
  }

  const handleDecrease = (cart) => {
    if (cart === 1) {
      dispatch(cartActions.remove(item))
      return
    }

    dispatch(cartActions.changeQuantity({
      id: item.id,
      cart: --cart
    }))
  }

  return (
    <React.Fragment>
      {product ? (
        <React.Fragment>
          <Box
            borderRadius={30}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            className={classes.wrapper}
          >
            <IconButton
              color="primary"
              size="small"
              onClick={() => handleDecrease(product.cart)}
            >
              <RemoveIcon />
            </IconButton>
            <Box mx={1} component="span" fontWeight="fontWeightBold">
              {product.cart}
            </Box>
            <IconButton
              color="primary"
              size="small"
              onClick={() => handleIncrease(product.cart)}
            >
              <AddIcon />
            </IconButton>
          </Box>
        </React.Fragment>
      ) : (
        <Button
          color="primary"
          fullWidth
          variant="contained"
          size="small"
          disableElevation
          onClick={handleAdd}
        >
          Agregar
        </Button>
      )}
    </React.Fragment>
  )
}

export default ButtonAdd
