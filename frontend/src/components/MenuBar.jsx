import { Box, Flex, Stack, Link } from '@chakra-ui/react'

function MenuBar() {
    
  return (
    <Flex mb={'20px'} borderBottom={'1px solid black'} w={'100vw'} h={'80px'} justifyContent={'space-between'} alignItems={'center'}>
        <Box m={'auto auto auto 25px'} fontWeight={'600'}>
            <Stack flexDirection={'row'} spacing={6}>
                <Link>Playground</Link>
                <Link>Services</Link>
                <Link>Case Studies</Link>
                <Link>About me</Link>
            </Stack>
        </Box>
        <Box m={'auto 25px auto auto'} fontWeight={'600'}>
            <Stack flexDirection={'row'} spacing={6}>
                <Link>Relogio</Link>
                <Link>Bla bla bla</Link>
                <Link>BLA BLA BLA</Link>
            </Stack>
        </Box>
    </Flex>
  )
}

export default MenuBar