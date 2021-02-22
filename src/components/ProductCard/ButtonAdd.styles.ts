import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      borderColor: theme.palette.primary.main,
      borderStyle: 'solid',
      borderWidth: 2,
      paddingLeft: 5,
      paddingRight: 5,
    }
  })
)
