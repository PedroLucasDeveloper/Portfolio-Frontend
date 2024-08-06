import { Box, Button, Grid, GridItem, Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react';

function Hello() {
  const gridTemplateColumns = useBreakpointValue({ base: '1fr', md: 'repeat(2, 1fr)' });

  return (
    <Box h={{ base: 'auto', md: '500px' }} p={4}>
      <Grid templateColumns={gridTemplateColumns} gap={4}>
        <GridItem
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={4}
          textAlign="center"
        >
          <Heading
            fontFamily="Luckiest Guy, sans-serif"
            color="black"
            textShadow="3px 3px 4px lightgray"
            fontWeight="normal"
            fontSize={{ base: '36px', md: '60px' }}
          >
            Olá mundo! <br /> Eu sou Pedro Lucas :)
          </Heading>
        </GridItem>

        <GridItem
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={4}
          textAlign="center"
        >
          <Heading fontSize={{ base: '18px', md: '20px' }} mb={4}>
            A Website developer based in Quixadá, Brasil.
          </Heading>
          <Text mb={3} color="gray">
            blabla blablablaaaaaaaaaaaaaaaaaaaaaaa
          </Text>
          <Stack spacing={4} direction={{ base: 'column', md: 'row' }}>
            <Button bg="black" color="white" w={{ base: 'full', md: '130px' }}>
              Talk to me
            </Button>
            <Button variant="outline" borderColor="lightgray" color="black" w={{ base: 'full', md: '130px' }}>
              See my work
            </Button>
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Hello;