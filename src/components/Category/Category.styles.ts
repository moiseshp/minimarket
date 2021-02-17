import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

const gutter = 16

export const useStyles = makeStyles((theme: Theme) =>
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
