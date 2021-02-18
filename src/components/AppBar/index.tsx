import React from 'react'
import { useDispatch } from 'react-redux'
import * as shopActions from 'redux/actions/shop'
import { useHistory } from 'react-router-dom'
import { useStyles } from './AppBar.styles'
import { AppBar as Navbar, IconButton, Toolbar } from '@material-ui/core'
import { ArrowBack as ArrowBackIcon, Storefront } from '@material-ui/icons'
import Contact from './Contact'
import Payment from './Payment'

type Props = {
  children?: any,
  showBackButton?: boolean,
  fullWidth?: boolean
}

const AppBar: React.FC<Props> = ({ children, showBackButton, fullWidth }) => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()

  const handleBack = () => {
    history.push('/latiendademariafe')
    dispatch(shopActions.store({
      searchText: ''
    }))
  }
  return (
    <React.Fragment>
      <Navbar
        color="default"
        position="fixed"
        elevation={0}
      >
        <Toolbar className={classes.toolbar}>
          {showBackButton ? (
            <IconButton color="inherit"  edge="start" onClick={handleBack}>
              <ArrowBackIcon />
            </IconButton>
          ) : (
            <IconButton color="primary" edge="start">
              <Storefront />
            </IconButton>
          )}
          
          {children}

          {!fullWidth && (
            <React.Fragment>
              <div style={{ flexGrow: 1 }} />
              <Contact />
              <Payment />
            </React.Fragment>          
          )}        
        </Toolbar>
      </Navbar>
      <Toolbar className={classes.toolbar} />
    </React.Fragment>
  )
}

export default AppBar
