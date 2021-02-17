import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
      boxShadow: 'none'
    },
    toolbar: {
      height: 56
    }
  })
)
