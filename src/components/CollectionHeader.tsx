import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Button, Container, Toolbar, Typography } from '@material-ui/core'
import { ChevronRight } from '@material-ui/icons'
  
type Props = {
  title: String,
  link?: String
}
const CollectionHeader = ({ title, link }: Props) => {
  const history = useHistory()
  return (
    <Container disableGutters>
      <Toolbar variant="dense">
        <Typography variant="body1">
          <Typography component="span" color="primary">
            <strong>+</strong>
          </Typography>
          <strong> {title}</strong>
        </Typography>
        <div style={{ flexGrow: 1}} />
        {link && (
          <>
            <Button onClick={() => history.push('/labodegadelachinola/explore')}>
              <Box fontSize={12}>VER TODO</Box>
            </Button>
            <ChevronRight fontSize="small" />
          </>
        )}
      </Toolbar>
    </Container>
  )
}

export default CollectionHeader
