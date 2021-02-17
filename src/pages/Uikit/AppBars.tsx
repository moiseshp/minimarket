import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { AppBar, IconButton, Typography, Toolbar } from '@material-ui/core'
import {
  NotesOutlined,
  WhatsApp,
  StorefrontOutlined
} from '@material-ui/icons'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#f8f8f8',
      boxShadow: 'none',
    },
    title: {
      flexGrow: 1,
      fontWeight: theme.typography.fontWeightBold
    }
  })
)

const AppBars = () => {
  const classes = useStyles()

  return (
    <AppBar position="fixed" color="transparent" className={classes.root}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <StorefrontOutlined />
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>
          BODEGA DON TITO
        </Typography>
        <IconButton color="inherit">
          <WhatsApp />
        </IconButton>
        <IconButton edge="end" color="inherit" aria-label="menu">
          <NotesOutlined />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default AppBars
