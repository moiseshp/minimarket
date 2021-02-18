import React from 'react'
import { Box, Button, Dialog, AppBar, Fab, Toolbar, IconButton, Typography } from '@material-ui/core'
import { Close as CloseIcon, ShoppingBasketOutlined } from '@material-ui/icons'
import Slide from '@material-ui/core/Slide'
import { TransitionProps } from '@material-ui/core/transitions'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const Cart = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <React.Fragment>
      <Fab color="secondary" aria-label="add"
        style={{
          position: 'absolute',
          zIndex: 1,
          top: -30,
          left: 0,
          right: 0,
          margin: '0 auto',
        }}>
        <ShoppingBasketOutlined />
      </Fab>
      <Dialog fullScreen open={open} onClose={() => setOpen(false)} TransitionComponent={Transition}>
        <AppBar
          color="inherit"
          position="fixed"
          elevation={0}          
        >
          <Toolbar>
            <ShoppingBasketOutlined />
            <Box ml={2} flexGrow={1}>
              <Typography variant="h6">
                <strong>Tu pedido está listo</strong>
              </Typography>
            </Box>
            
            <IconButton color="inherit" edge="end" onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Toolbar />
        Hello World
      </Dialog>
    </React.Fragment>
  )
}

export default Cart
