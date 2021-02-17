import React from 'react'
import { Box, Button, Container, Toolbar, Typography } from '@material-ui/core'
import { ChevronRight } from '@material-ui/icons'
  
type Props = {
  title: String,
  link?: String
}
const CollectionHeader = ({ title, link }: Props) => {
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
            <Button to={link}>
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
