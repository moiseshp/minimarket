import React from 'react'
import { useHistory } from 'react-router-dom'
import { useStyles } from './AppBar.styles'
import { AppBar as Navbar, IconButton, Toolbar } from '@material-ui/core'
import { ArrowBackOutlined, NotesOutlined, Storefront, WhatsApp } from '@material-ui/icons'

type Props = {
  children?: any,
  showBackButton?: boolean,
  fullWidth?: boolean
}

const AppBar: React.FC<Props> = ({ children, showBackButton, fullWidth }) => {
  const classes = useStyles()
  const history = useHistory()

  const handleBackButton = () => {
    history.push('/labodegadelachinola')
  }

  return (
    <React.Fragment>
      <Navbar 
        className={classes.root}
        color="transparent"
        position="fixed"
      >
        <Toolbar className={classes.toolbar}>
          {showBackButton ? (
            <IconButton color="inherit"  edge="start" onClick={handleBackButton}>
              <ArrowBackOutlined />
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
              <IconButton color="inherit" edge="end">
                <WhatsApp />
              </IconButton>
              <IconButton aria-label="menu" edge="end" color="inherit">
                <NotesOutlined />
              </IconButton>
            </React.Fragment>          
          )}        
        </Toolbar>
      </Navbar>
      <Toolbar className={classes.toolbar} />
    </React.Fragment>
  )
}

export default AppBar
