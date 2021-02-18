import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as shopActions from 'redux/actions/shop'
import { useStyles } from './Search.styles'
import { InputAdornment, TextField } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'

const SearchEngine = () => {
  const history = useHistory()
  const classes = useStyles()
  const { shop } = useSelector((state: any) => state)
  const dispatch = useDispatch()
  const input = React.useRef<any>(null)

  const handleFocus = () => {
    dispatch(shopActions.store({
      searchIsActive: true
    }))
  }

  const handleBlur = () => {
    dispatch(shopActions.store({
      searchIsActive: false
    }))
  }

  const handleChange = (e) => {
    dispatch(shopActions.store({
      searchText: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    input.current.blur()
    history.push(`/latiendademariafe/explore?search=${shop.searchText}`)
    // console.info(input)
    // console.info(shop.searchText)
    // dispatch(shopActions.store({
    //   loading: true,
    // }))
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <TextField
        inputRef={input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        variant="outlined"
        size="small"
        placeholder="Busca un producto"
        fullWidth
        onChange={handleChange}
        defaultValue={shop.searchText}
        autoFocus={shop.searchIsActive}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
    </form>
  )
}

export default SearchEngine
