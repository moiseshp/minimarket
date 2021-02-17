import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import { responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import * as pages from 'pages'
import theme from 'theme'

import ShopRoute from 'context/ShopRoute'

const App = () => {
  const muiTheme = responsiveFontSizes(theme)  
  return(
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={pages.Home} exact />
            <Route path="/uikit" component={pages.Uikit} exact />
            <ShopRoute path="/:shop" component={pages.Shop} exact />
            <ShopRoute path="/:shop/explore" component={pages.Explore} exact />
            <Route component={pages.NotFound} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App