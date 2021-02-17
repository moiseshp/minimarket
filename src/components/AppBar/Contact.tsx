import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, Container, Drawer, IconButton, Typography } from '@material-ui/core'
import { Storefront, WhatsApp } from '@material-ui/icons'


// const phone = '+51949399454'
// const text = `Hola *La tienda de Mariafé* tengo una consulta`
// const whatsapp = `http://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`
// href={whatsapp}

const Contact = () => {
  // const classes = useStyles()
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
        <Box minHeight="70vh" pt={4}>
          <Container>
            <Box display="flex">
              <Storefront fontSize="large" color="primary" />
              <Box pl={2}>
                <Typography variant="h3" color="primary">
                  <strong>Hola!</strong>
                </Typography>
                <Typography variant="body2">
                  Soy <strong>Don Mochito</strong> y estoy atento a todas tus consultas. Llámame o envíame un mensaje directo.
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
                <Typography variant="body2">
                  <strong>Horario de atención</strong>
                  <br />
                  Disponible en el siguiente horario:
                  <br />
                  L-V 9:30 AM - 18:00
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </Drawer>
    </div>
  )
}

export default Contact