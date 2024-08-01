import { Box, Grid, GridItem } from '@chakra-ui/react'
import MenuBar from '../components/MenuBar'
import Hello from '../components/Hello'
import ProjectsArea from '../components/ProjectsArea'

function PaginaInicial() {
    
  return (
    <Box>
      <MenuBar/>

      <Grid templateRows='repeat(2, 1fr)' gap={2}>
      <GridItem w='100%' h={'40vh'}>
        <Hello/>
      </GridItem>

      <GridItem w='100%' h={'40vh'} bg={'whitesmoke'}>
        <ProjectsArea/>
      </GridItem> 
    </Grid>
      
    </Box>
  )
}

export default PaginaInicial
