import React from 'react'
import { useSelector } from 'react-redux'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import { Button, Fab, Toolbar, Box } from '@material-ui/core'
import { ShoppingBasketOutlined } from '@material-ui/icons'
import Cart from './Cart'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
    },
  })
)

const Checkout = () => {
  const { cart } = useSelector((state: any) => state)
  const classes = useStyles()
  return (
    <React.Fragment>
      <Toolbar />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          {/* <ShoppingBasketOutlined />  */}
          <Box>
            {cart.products.length} Artículos en la canasta
            <br />
            <strong>
              Total S/ {cart.payment.toFixed(2)}
            </strong>
          </Box> 
          {/* <Cart /> */}
          <div className={classes.grow} />
          <Button
            color="secondary"
            variant="contained"
            disableElevation
            size="small"
            startIcon={
              <ShoppingBasketOutlined />
            }
          >
            Ver canasta
          </Button>
          {/* <Box fontWeight="fontWeightBold" mr={2}>
          </Box> */}
          {/* <Info /> */}
          {/* <AccountBalanceWalletOutlined />  */}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default Checkout
