import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as shopActions from 'redux/actions/shop'
import { Button, InputAdornment, TextField } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'

const classes = {
  button: {
    marginRight: -8, marginTop: -1
  }
}
const Search = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleFocus = () => {
    history.push('/latiendademariafe/explore')
    dispatch(shopActions.store({
      searchIsActive: true
    }))
  }

  const handleGoToExplore = () => {
    history.push('/latiendademariafe/explore')    
  }

  return (
    <TextField 
      variant="outlined"
      size="small"
      placeholder="Busca un producto"
      fullWidth
      onFocus={handleFocus}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <Button 
              variant="contained"
              color="primary"
              size="small"
              disableElevation
              style={classes.button}
              onClick={handleGoToExplore}
            >
              Ver todo
            </Button>
          </InputAdornment>
        )
      }}
    />  
  )
}

export default Search
