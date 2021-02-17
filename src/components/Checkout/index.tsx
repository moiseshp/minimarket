import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import { Fab, Toolbar, Box } from '@material-ui/core'
import { ArrowUpwardOutlined, AccountBalanceWalletOutlined, ShoppingBasketOutlined } from '@material-ui/icons'
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
  const classes = useStyles()
  return (
    <>
      <Toolbar />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <ShoppingBasketOutlined /> 
          <Box fontWeight="fontWeightBold" ml={2}>
            10 Artículos
          </Box> 
          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <ArrowUpwardOutlined />
          </Fab>
          <div className={classes.grow} />
          <Box fontWeight="fontWeightBold" mr={2}>
            S/ 123.00
          </Box> 
          <AccountBalanceWalletOutlined /> 
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Checkout
