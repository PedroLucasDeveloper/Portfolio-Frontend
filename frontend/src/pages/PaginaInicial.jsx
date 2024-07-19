import { Box, Grid, GridItem } from '@chakra-ui/react'
import MenuBar from '../components/MenuBar'

function PaginaInicial() {
    
  return (
    <Box>
      <MenuBar/>

      <Grid templateRows='repeat(2, 1fr)' gap={2}>
      <GridItem w='100%' h={'40vh'} bg='red.500'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis tenetur necessitatibus, cumque laudantium eum, nesciunt quis cum voluptates numquam voluptatibus velit dolores fuga nemo neque itaque ullam inventore reprehenderit fugit.</p>
      </GridItem>

      <GridItem w='100%' h={'40vh'} bg='blue.500'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officia et sit modi veniam totam distinctio quo qui, aut ullam numquam inventore minima aliquam debitis excepturi, quis quasi assumenda atque.</p>
      </GridItem> 
    </Grid>
      
    </Box>
  )
}

export default PaginaInicial
