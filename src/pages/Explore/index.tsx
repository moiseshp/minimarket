import React from 'react'
import { useSelector } from 'react-redux'
import { useStyles } from './Explore.styles'
import { Box } from '@material-ui/core'
import AppBar from 'components/AppBar'
import Category from 'components/Category'
import SearchEngine from 'components/SearchEngine'
import Checkout from 'components/Checkout'
import ProductList from './ProductList'

const Explore: React.FC = () => {
  const classes = useStyles()
  const { shop } = useSelector((state: any) => state)

  return (
    <React.Fragment>
      <AppBar
        showBackButton
        fullWidth={shop.searchIsActive}
      >
        <SearchEngine />
      </AppBar>

      {!shop.searchIsActive && (
        <React.Fragment>
          <Box className={classes.category}>
            <Category />
          </Box>
  
          <ProductList />
    
          <Checkout />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Explore
