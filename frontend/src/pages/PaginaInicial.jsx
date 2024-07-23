import { Box, Grid, GridItem } from '@chakra-ui/react'
import MenuBar from '../components/MenuBar'
import Hello from '../components/Hello'

function PaginaInicial() {
    
  return (
    <Box>
      <MenuBar/>

      <Grid templateRows='repeat(2, 1fr)' gap={2}>
      <GridItem w='100%' h={'40vh'}>
        <Hello/>
      </GridItem>

      <GridItem w='100%' h={'40vh'} bg='blue.500'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officia et sit modi veniam totam distinctio quo qui, aut ullam numquam inventore minima aliquam debitis excepturi, quis quasi assumenda atque.</p>
      </GridItem> 
    </Grid>
      
    </Box>
  )
}

export default PaginaInicial
