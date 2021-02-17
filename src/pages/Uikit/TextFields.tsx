import React from 'react'
import { TextField, InputAdornment } from '@material-ui/core'
import { Search }from '@material-ui/icons'

const TextFields = () => {

  return (
    <form noValidate autoComplete="off">
      <TextField variant="outlined" />
      <TextField variant="outlined" size="small" />
      <TextField
        variant="outlined"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        variant="filled" 
      />
      <TextField disableUnderline label="Standard" />
    </form>
  )
}

export default TextFields
