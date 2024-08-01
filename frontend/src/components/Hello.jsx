import { Box, Button, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react'

function Hello() {
    
  return (
    <Box h={'500px'}>
      <Grid templateColumns='repeat(2, 1fr)' gap={2}>
      <GridItem display={'flex'} justifyContent={'center'} alignItems={'center'} w='100%' p={3}>
        <Heading fontSize={'50px'}>Olá mundo! <br /> Eu sou Pedro Lucas :)</Heading>
      </GridItem>

      <GridItem display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} w='100%' h={'40vh'} p={3}>
      <Heading fontSize={'20px'} mb={4}>A Website developer based in Quixadá, Brasil.</Heading>
      <Text mb={3} color={'gray'}>blabla blablablaaaaaaaaaaaaaaaaaaaaaaa</Text>
        <Stack spacing={8} direction={'row'}>
            <Button bg={'black'} color={'white'} w={'130px'}>Talk to me</Button>
            <Button variant={'solid'} border={'1px solid lightgray'} bg={'white'} w={'130px'}>See my work</Button>
        </Stack>
      </GridItem> 
    </Grid>
      
    </Box>
  )
}

export default Hello
