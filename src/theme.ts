import { createMuiTheme } from '@material-ui/core/styles'

// const gradient = (theme: any, color: string) => {
//   return `linear-gradient(-10deg, ${theme.palette[color].main} 10%, ${theme.palette[color].light} 80%)`
// }

const boxShadow = (color: string) => {
  return `8px 9px 17px ${color}`
}

const backgroundColor = '#f5f5f5'
const borderRadius = 30
const buttonPadding = 20

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Poppins',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    // fontWeightLight: 300,
    // fontWeightRegular: 400,
    // fontWeightMedium: 600,
    // fontWeightBold: 700,
    button: {
      fontWeight: 600,
    },
  },
  palette: {
    // type: 'dark',
    background: {
      default: backgroundColor
    },
    primary: {
      main: '#FF4700',
      light: '#FC6569'
    },
    secondary: {
      main: '#ffae00',
      light: '#FFE100'
    }  
  },
  shape: {
    // borderRadius: 30,
  },
  props: {
    MuiButton: {
      // disableElevation: true,
      // color: 'primary'
    },
  }
})

theme.overrides = {
  MuiCard: {
    root: {
      borderRadius: 12,
      boxShadow: boxShadow('#E3E3E3')
    }
  },
  MuiOutlinedInput: {
    root: {
      borderRadius,
      '& $notchedOutline': {
        borderColor: 'rgba(0, 0, 0, 0.8)',
        borderWidth: 2,
      },
    }
  },
  MuiLinearProgress: {
    root: {
      height: 2,
    }
  },
  MuiButton: {
    root: {
      borderRadius,
      textTransform: 'inherit',
      paddingLeft: theme.shape.borderRadius,
      paddingRight: theme.shape.borderRadius
    },
    sizeSmall: {
      paddingLeft: buttonPadding,
      paddingRight: buttonPadding
    },
    outlinedSizeSmall: {
      borderWidth: 2,
      paddingLeft: buttonPadding,
      paddingRight: buttonPadding
    },
    outlined: {
      borderWidth: 2,
      '&$disabled': {
        borderWidth: 2
      },
    },
    outlinedPrimary: {
      borderColor: theme.palette.primary.main,
      '&:hover': {
        borderWidth: 2 
      }
    },

  }
  
}

// theme.overrides = {
//   MuiCard: {
//     root: {
//       borderRadius: 12,
//       boxShadow: boxShadow('#E3E3E3'),
//     }
//   },
//   MuiFilledInput: {
//     root: {
//       borderRadius: theme.shape.borderRadius,
//       // boxShadow: boxShadow('#EAEAEA'),
//     }
    
//     // https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/FilledInput/FilledInput.js
//   },
//   MuiOutlinedInput: {
//     root: {
//       '& $notchedOutline': {
//         borderColor: 'rgba(0, 0, 0, 0.8)',
//         borderWidth: 2,
//       },
//       // boxShadow: boxShadow('#EAEAEA'),
//     }
//     // https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/FilledInput/FilledInput.js
//   },
//   MuiButton: {
//     // https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Button/Button.js
//     root: {
//       textTransform: 'inherit',
//       // borderRadius: 50,
//       paddingLeft: theme.shape.borderRadius,
//       paddingRight: theme.shape.borderRadius
//       // fontWeight: 500,
//     },
//     contained: {
//       backgroundColor: 'white',
//       boxShadow: boxShadow('#eee'),
//       '&:hover': {
//         backgroundColor: 'white',
//         boxShadow: boxShadow('#eee'),
//       }
//     },
//     /* Styles applied to the root element if `size="small"` and `variant="contained"`. */
//     outlinedSizeSmall: {
//       borderWidth: 2,
//       // paddingLeft: 20,
//       // paddingRight: 20
//     },
//     containedSizeSmall: {
//       // paddingLeft: 20,
//       // paddingRight: 20
//     },
//     /* Styles applied to the root element if `size="large"` and `variant="contained"`. */
//     containedSizeLarge: {
//       // paddingLeft: 40,
//       // paddingRight: 40
//     },
//     outlined: {
//       border: `2px solid ${
//         theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.23)'
//       }`,
//       // borderColor: theme.palette.grey[700],
//       '&$disabled': {
//         borderWidth: 2
//         // border: `1px solid ${theme.palette.action.disabledBackground}`,
//       },
//     },
//     outlinedPrimary: {
//       borderColor: theme.palette.primary.main,
//       '&:hover': {
//         borderWidth: 2 
//       }
//     },
//     outlinedSecondary: {
//       borderColor: theme.palette.secondary.main,
//       color: theme.palette.text.primary,
//       '&:hover': {
//         borderWidth: 2 
//       }
//     },
//     containedPrimary: {
//       // background: gradient(theme, 'primary'),
//       boxShadow: boxShadow('#FEC5BB'),
//       '&:hover': {
//         boxShadow: boxShadow('#FEC5BB'),
//       }
//     },
//     containedSecondary: {
//       // background: gradient(theme, 'secondary'),
//       boxShadow: boxShadow('#FFF3B0'),
//       '&:hover': {
//         boxShadow: boxShadow('#FFF3B0'),
//       }
//     },
//     sizeSmall: {
//       paddingLeft: 20,
//       paddingRight: 20
//     },
//     sizeLarge: {
//       paddingLeft: 40,
//       paddingRight: 40
//     },
//     // text: {
//     //   color: 'white',
//     //   borderRadius: 25,
//     //   background: 'linear-gradient(45deg, #5A189A 10%, #9D4EDD 80%)',
//     //   borderRadius: 3,
//     //   border: 0,
//     //   height: 48,
//     //   padding: '0 100px',
//     //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     // },

//   }
// }

export default theme