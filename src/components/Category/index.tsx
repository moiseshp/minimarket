import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useStyles } from './Category.styles'
import { Box, Button } from '@material-ui/core'
import SliderContainer from 'components/SliderContainer'
import ICategory from 'redux/types/category'
// import List from './List'
// import View from './View'

type Props = {
  items: Array<ICategory>
}
const Category: React.RC<Props> = () => {
  const history = useHistory()
  const classes = useStyles()
  const { shop } = useSelector((state: any) => state)

  const handleSubmit = (category) => {
    history.push(`/labodegadelachinola/explore?category=${category}`)    
  }

  const color = (item) => item.uuid === 'all' ? 'secondary' : 'inherit' 

  return (
    <SliderContainer>
      {shop.category.items.map((item: ICategory) => (
        <Box 
          className={classes.item}
          key={item.uuid}
          mr={1}
        >
          <Button
            variant="contained"
            size="small"
            color={color(item)}
            disableElevation
            onClick={() => handleSubmit(item.name)}
          >
            {item.name}
          </Button>
        </Box>
      ))}
    </SliderContainer>
  )
}

export default Category
