import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { Box, Button } from '@material-ui/core'
import ICategory from '../../redux/types/category'
const gutter = 16
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      '&:first-child': {
        [theme.breakpoints.down('sm')]: {
          paddingLeft: gutter,
        }
      },
      '&:last-child': {
        [theme.breakpoints.down('sm')]: {
          paddingRight: gutter
        }
      }
    }
  })
)

const List = ({ items }) => {
  const classes = useStyles()
  return (
    <React.Fragment>
      {items.map((item: ICategory) => (
        <Box 
          className={classes.item}
          key={item.uuid}
          mr={1}
        >
          <Button
            variant="contained"
            size="small"
            color="primary"
            disableElevation
          >
            {item.name}
          </Button>
        </Box>
      ))}
    </React.Fragment>
  )
}

export default List
