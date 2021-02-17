import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { Box, Container } from '@material-ui/core'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      [theme.breakpoints.down('sm')]: {
        padding: 0
      }
    },
    wrapper: {
      display: 'flex',
      flexWrap: 'nowrap',
      overflowX: 'auto',
      '&::-webkit-scrollbar': { display: 'none' }
    }
  })
)

type Props = {
  children?: React.ReactNode
}

const SliderContainer = ({ children }: Props) => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Box className={classes.wrapper}>
        {children}
      </Box>
    </Container>
  )
}

export default SliderContainer
