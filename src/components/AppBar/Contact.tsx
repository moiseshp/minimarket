import React from 'react'
import { Box, Button, Container, Drawer, IconButton, Typography } from '@material-ui/core'
import { WhatsApp } from '@material-ui/icons'


// const phone = '+51949399454'
// const text = `Hola *La tienda de Mariafé* tengo una consulta`
// const whatsapp = `http://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`
// href={whatsapp}

const Contact = () => {
  const [state, setState] = React.useState(false)

  return (
    <div>
      <IconButton 
        color="inherit" 
        edge="end"
        onClick={() => setState(true)}
      >
        <WhatsApp />
      </IconButton>
      <Drawer
        anchor="bottom"
        open={state}
        onClose={() => setState(false)}
        >
        <Box pb={6} pt={5}>
          <Container>
            <Box display="flex">
              <WhatsApp fontSize="large" color="primary" />
              <Box pl={2}>
                <Typography variant="h3" color="primary">
                  <strong>Hola!</strong>
                </Typography>
                <Typography variant="body2">
                  Soy <strong>Don Mochito</strong> llámame o envíame un mensajito si tienes alguna consulta.
                </Typography>
                <Box mb={2} mt={3}>
                  <Button variant="outlined" size="large" color="inherit" >
                    <strong>Llamar &nbsp; 949 399 454 </strong>
                  </Button>
                </Box>
                <Box mb={3}>
                  <Button variant="outlined" color="inherit" size="large">
                    <WhatsApp color="inherit" /> &nbsp; Whatsapp
                  </Button>
                </Box>

                <Box mb={2}>
                  <Typography component="div" variant="body2">
                    <strong>
                      <Typography component="span" color="primary">+</Typography> Horario de atención
                    </strong>
                    <br />
                    <Box ml="15px">
                      L-V 9:30 AM - 18:00
                    </Box>
                  </Typography>
                </Box>

                <Typography component="div" variant="body2">
                  <strong>
                    <Typography component="span" color="primary">+</Typography> Zonas de reparto
                  </strong>
                  <br />
                  <Box ml="15px">
                    Pedido mínimo S/30.00
                    <br />
                    Peso mínimo de venta 250gr en Quesos y Jamones
                    <br />
                    DELIVERY GRATIS en Surquillo 
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
        <Box bgcolor="primary" height={6} />
      </Drawer>
    </div>
  )
}

export default Contact