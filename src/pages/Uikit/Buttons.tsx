import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        marginBottom: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
    },
  }),
)

const Buttons = () => {
  const classes = useStyles()

  return (
    <section>
      <article className={classes.root}>
        <h4>Buttons <span>Small</span></h4>
        <Button variant="outlined" size="small">Default</Button>
        <Button variant="outlined" size="small" color="primary">
          Primary
        </Button>
        <Button variant="outlined" size="small" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" size="small" disabled>
          Disabled
        </Button>
        <Button variant="outlined" size="small" color="primary" href="#contained-buttons">
          Link
        </Button>
      </article>
      <article className={classes.root}>
        <h4>Buttons <span>Small</span></h4>
        <Button variant="contained" size="small">Default</Button>
        <Button variant="contained" size="small" color="primary">
          Primary
        </Button>
        <Button variant="contained" size="small" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" size="small" disabled>
          Disabled
        </Button>
        <Button variant="contained" size="small" color="primary" href="#contained-buttons">
          Link
        </Button>
      </article>
      <article className={classes.root}>
        <h4>Buttons <span>Normal</span></h4>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
      </article>
      <article className={classes.root}>
        <h4>Buttons <span>Large</span></h4>
        <Button variant="contained" size="large">Default</Button>
        <Button variant="contained" size="large" color="primary">
          Primary
        </Button>
        <Button variant="contained" size="large" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" size="large" disabled>
          Disabled
        </Button>
        <Button variant="contained" size="large" color="primary" href="#contained-buttons">
          Link
        </Button>
      </article>
    </section>
  )
}

export default Buttons
