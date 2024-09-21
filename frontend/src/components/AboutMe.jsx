import { Box, Avatar, Wrap, WrapItem, Heading, Stack, Text, Flex } from "@chakra-ui/react";

const AboutMe = () =>{
    return(
        <Flex className="flex text-white bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-black to-slate-950 h-full w-full rounded-md">
            <Box className="bg-teal-900 rounded-md h-full w-2/5 flex justify-start flex-col items-center p-2">
                <Wrap>
                    <WrapItem className="flex justify-center">
                        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' height={250} width={250}/>
                    </WrapItem>
                </Wrap>
                <Heading fontSize={'20px'} mt={5} textShadow={'1px 1px 1px black'} textAlign={'center'}>Pedro Santos</Heading>
                <Heading fontSize={'16px'} mt={2} textAlign={'center'}>Web Developer Frontend</Heading>

                <Stack w={'100%'} mt={10} spacing={2}>
                    <Text className="ssm:text-sm sm:text-sm md:text-lg lg:text-lg" whiteSpace={'wrap'} wordBreak={'break-word'} textAlign={'center'}>Graduando em Ciência da Computação - UFC</Text>
                    <Text className="ssm:text-sm sm:text-sm md:text-lg lg:text-lg" whiteSpace={'wrap'} wordBreak={'break-word'} textAlign={'center'}>Estagiário Frontend na Open7 Tecnologia</Text>
                    <Text className="ssm:text-sm sm:text-sm md:text-lg lg:text-lg" whiteSpace={'wrap'} wordBreak={'break-word'} textAlign={'center'}>Técnico em Informática</Text>
                </Stack>
            </Box>

            <Box className="h-full w-full flex justify-center items-center flex-col">
                <Box className="w-3/4 p-2 flex justify-center items-center">
                    <Text as={'cite'} className="text-3xl text-center ssm:text-md sm:text-md">
                        Às vezes, são as pessoas das quais ninguém imagina nada que fazem as coisas que ninguém pode imaginar.
                    </Text>
                </Box>

                    <Box className="mt-4 p-2 flex justify-center items-center">
                        <Text as={'cite'} className="text-2xl text-center ssm:text-sm sm:text-sm">
                            O Jogo da Imitação
                        </Text>
                    </Box>

            </Box>

        </Flex>
    );
}

export default AboutMe;