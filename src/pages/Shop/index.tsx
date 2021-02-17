import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Container, Typography } from '@material-ui/core'
import CollectionHeader from 'components/CollectionHeader'
import AppBar from 'components/AppBar'
import Category from 'components/Category'
import Search from './Search'
import Collection from './Collection'

const Shop = () => {
  const { shop } = useSelector((state: any) => state)

  return (
    <React.Fragment>
      <AppBar>
        <Typography noWrap>
          <strong>{shop.name}</strong>
        </Typography>
      </AppBar>

      <Container>
        <Box mt={1} mb={2}>
          <Typography variant="body2" color="textSecondary">
            Hola Moisés
          </Typography>
          <Typography variant="h3">
            <strong>¿Qué vas a <br /> comprar hoy?</strong>
          </Typography>
        </Box>
        <Search />
      </Container>

      <Box mt={2}>
        <CollectionHeader title="Categorías" />
        <Category />
      </Box>

      <Box mt={2}>
        <CollectionHeader title="Destacados" link="/" />
        <Collection page={1} />
      </Box>

      <CollectionHeader title="Ofertones" link="/" />
      <Collection page={5} />

      <Container>
        <Box py={2}>
          <Typography color="textSecondary" variant="caption">
            Powered by <strong>VirtualBox</strong> &copy; {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>

    </React.Fragment>
  )
}

export default Shop
