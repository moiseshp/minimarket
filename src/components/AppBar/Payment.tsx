import React from 'react'
import { Box, Button, Container, Drawer, IconButton, Typography } from '@material-ui/core'
import { PaymentOutlined } from '@material-ui/icons'


// const phone = '+51949399454'
// const text = `Hola *La tienda de Mariafé* tengo una consulta`
// const whatsapp = `http://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`
// href={whatsapp}

const Payment = () => {
  const [state, setState] = React.useState(false)

  return (
    <React.Fragment>
      <IconButton 
        color="inherit" 
        edge="end"
        onClick={() => setState(true)}
      >
        <PaymentOutlined />
      </IconButton>
      <Drawer
        anchor="bottom"
        open={state}
        onClose={() => setState(false)}
        >
        <Box pb={6} pt={5}>
          <Container>
            <Box display="flex">
              <PaymentOutlined fontSize="large" color="primary" />
              <Box pl={2}>
                <Typography variant="h3" color="primary">
                  <strong>Pagos</strong>
                </Typography>
                <Typography variant="body2">
                  Puedes pagar al recibir o recoger tu producto. Aceptamos todas las tarjetas de crédito y también transferencias.
                </Typography>

                <Box my={2}>
                  <Typography component="div" variant="body2">
                    <strong>
                      <Typography component="span" color="primary">+</Typography> Yape - BCP
                    </strong>
                    <br />
                    <Box ml="15px">
                      Moisés Eduardo Huaringa Pecho
                      <br />
                      949 399 454
                      <br />
                      Transferencia: 001-003030-1232-232
                      CCI: 001-003030-1232-232
                    </Box>
                  </Typography>
                </Box>

                <Typography component="div" variant="body2">
                  <strong>
                    <Typography component="span" color="primary">+</Typography> PLIN - BBVA, Interbank y Banbif
                  </strong>
                  <br />
                  <Box ml="15px">
                    Moisés Eduardo Huaringa Pecho
                    <br />
                    949 399 454
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
        <Box bgcolor="primary" height={6} />
      </Drawer>
    </React.Fragment>
  )
}

export default Payment