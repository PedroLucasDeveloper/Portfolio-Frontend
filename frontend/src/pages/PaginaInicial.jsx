import { Box, Grid, GridItem } from '@chakra-ui/react'
import MenuBar from '../components/MenuBar'
import Hello from '../components/Hello'
import SkillsArea from '../components/SkillsArea'

function PaginaInicial() {
    
  return (
    <Box>
      <MenuBar/>

      <Grid templateRows='repeat(1, 1fr)' gap={2}>
      <GridItem w='100%'>
        <Hello/>
      </GridItem>

      <GridItem w='100%' bg={'whitesmoke'}>
        <SkillsArea/>
      </GridItem> 
    </Grid>
      
    </Box>
  )
}

export default PaginaInicial
