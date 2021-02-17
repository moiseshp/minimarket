import React from 'react'
import { Box, CircularProgress } from '@material-ui/core'

type Props = {
  p?: number,
  m?: number,
  size?: number | string
}

const Spinner: React.FC<Props> = ({ p, m, size }) => {
  return (
    <Box
      p={p}
      m={m}
      textAlign="center"
    >
      <CircularProgress size={size} />
    </Box>
  )
}

export default Spinner
