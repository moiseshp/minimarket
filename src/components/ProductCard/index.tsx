import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { 
  Box,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core'
import ButtonAdd from './ButtoAdd'
import IProduct from 'redux/types/product'

const cardMediaHeight = 160
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardMedia: ({ post }: any) => ({
      height: post ? cardMediaHeight : '100%',
      backgroundSize: 'contain',
      borderRadius: 5,
    }),
    gridMedia: {
      padding: 5
    },
    cardContent: ({ post }: any) => {
      return {
        padding: post ? theme.spacing(2) : theme.spacing(1),
        '&:last-child': {
          paddingBottom: post ? theme.spacing(2) : theme.spacing(1)
        }
      }
    },
    lineThrough: {
      textDecoration: 'line-through'
    }
  })
)

type Props = {
  item: any,
  post?: Boolean | undefined
}

const photo = 'https://raw.githubusercontent.com/moiseshp/minimarket/master/public/images/'

const ProductCard: React.FC<Props> = ({ item, post }) => {
  const classes = useStyles({ post })
  return (
    <Card>
      <Grid container>
        <Grid item xs={post ? 12 : 4} className={classes.gridMedia}>
          <CardMedia
            classes={{
              root: classes.cardMedia,
            }}
            image={`${photo}${item.id}.webp`}
            title={item.title}
          />
        </Grid>
        <Grid item xs={post ? 12 : 8}>
          <CardContent className={classes.cardContent}>
            <Typography
              variant="caption"
              color="textSecondary"
              noWrap
            >
              {item.category}
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              noWrap
            >
              <strong>{item.title}</strong>
            </Typography>
            <Grid container>
              <Grid item xs={5}>
                <Typography
                  variant="caption"
                  color="primary"
                  component="p"
                  noWrap
                  className={classes.lineThrough}
                >
                  S/ {item.price}
                </Typography>
                <Typography variant="body1" noWrap>
                  <strong>S/ {item.price}</strong>
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <Box mt={1}>
                  <ButtonAdd />
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default ProductCard
