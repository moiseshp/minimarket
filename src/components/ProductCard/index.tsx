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

const ProductCard = ({ item, post }: Props) => {
  const classes = useStyles({ post })
  return (
    <Card>
      <Grid container>
        <Grid item xs={post ? 12 : 4} className={classes.gridMedia}>
          <CardMedia
            classes={{
              root: classes.cardMedia,
            }}
            image={`https://loremflickr.com/300/300?random=${item.id}`}
            title={item.author}
          />
        </Grid>
        <Grid item xs={post ? 12 : 8}>
          <CardContent className={classes.cardContent}>
            <Typography
              variant="caption"
              color="textSecondary"
              noWrap
            >
              {item.width} x {item.height}
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              noWrap
            >
              <strong>{item.author}</strong>
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
                  S/ {item.id}
                </Typography>
                <Typography variant="body1" noWrap>
                  <strong>S/ {item.width}</strong>
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
