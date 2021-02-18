import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as shopActions from 'redux/actions/shop'
import Spinner from 'components/Spinner'
import * as pages from 'pages'

const ShopRoute = ({ component, ...rest }) => {
  const params = rest.computedMatch.params
  const { shop } = useSelector((state: any) => state)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(shopActions.getShop())
  }, [])

  if (shop.isLoading) {
    return <Spinner p={4} />
  }
  
  if (params.shop === 'latiendademariafe') {
    return (
      <Route {...rest} component={component} />
    )
  }
  
  return (
    <Route {...rest} component={pages.NotFound} />
  )
}

export default ShopRoute
