import './App.css'
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

import { Grid, GridItem } from '@chakra-ui/react'

function App() {

  return (
    <>
      <Grid
        templateAreas={`"header" "main" "footer"`} gridTemplateRows={'1fr 5fr'} h='100vh'
      >
        <GridItem area={'header'}>
          <Nav/>
        </GridItem>
        <GridItem area={'main'} className='flex justify-center items-center p-10'>
          <AboutMe/>
        </GridItem>
        <GridItem area={'footer'}>
          <Footer/>
        </GridItem>
      </Grid>
    </>
  )
}

export default App

