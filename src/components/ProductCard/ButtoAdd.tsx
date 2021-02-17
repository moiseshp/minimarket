import React from 'react'
import { 
  Button 
} from '@material-ui/core'

const ButtonAdd = () => {
  return (
    <div>
            {/* <Button size="small">
        <Remove />
      </Button>
      <Box mx={1} component="span" fontWeight="fontWeightBold">2</Box>
      <Button size="small">
        <Add />
      </Button> */}
      <Button color="primary" fullWidth variant="contained" size="small" disableElevation>
        Agregar
      </Button>
    </div>
  )
}

export default ButtonAdd
