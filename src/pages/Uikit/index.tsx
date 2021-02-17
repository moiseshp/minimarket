import React from 'react'
import { Box, Container } from '@material-ui/core'
import AppBars from './AppBars'
import Buttons from './Buttons'
import Cards from './Cards'
import TextFields from './TextFields'
import Icons from './Icons'

const Uikit = () => {
  return (
    <Container>
      <Box mt={10} />
      <h1>UIKit</h1>
      <AppBars />
      <Box mb={4} />
      <Buttons />
      <Box mb={4} />
      <Cards />
      <Box mb={4} />
      <TextFields />
      <Box mb={4} />
      <Icons />
    </Container>
  )
}

export default Uikit
