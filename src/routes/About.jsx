import React from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  Flex,
  Spacer,
  HStack,
  Button,
  Stack,
  useColorModeValue
} from "@chakra-ui/react";

import { DownloadIcon } from '@chakra-ui/icons';
import { useTypewriter } from 'react-simple-typewriter'

export default function About() {

  const bgColor = useColorModeValue('blackAlpha.600', 'white')
  const {text} = useTypewriter({
    words: ['FullStack Web Developer', 'Python Programmer'],
    loop: 0,
    typeSpeed: 70,
    cursorStyle: '|'
  })

  return (
    <Box p={5} mx={{ base: "1em", md: "3em", lg: "4.5em" }} my="3em">
      <Stack mb={10}>
        <HStack>
          <Heading mr={2} size={'2xl'}>Hi!</Heading>
          <Image src={'/images/waving-hand.png'}  objectFit={'cover'} boxSize={'70px'} alt='waving hand' />
        </HStack>
      </Stack>
      <Flex>
        <Box maxW={{ base: "100%", md: "50%", lg: "60%" }}>
          <Heading
            fontSize={["20", "28", "32", "35"]}
            marginBottom="25px"
          >
            I'm a&nbsp;{text}
          </Heading>
          <HStack justifyContent={'space-around'}  alignItems={'center'} spacing={5}>
            <Box w={'2%'} height={'120px'} bgColor={bgColor}></Box>
          <Text fontSize={["13", "16", "19", "20"]} fontFamily={'"Public Sans", sans-serif'} data-aos="fade-down">
            My name is <b>Hussein Mubarak</b>. Passionate about programming, love
            solving problems and most importantly, contributing to the world through tech.
            Also, deliver more than expected.
          </Text>
          </HStack>
          <Box>
            <Box mt="20px" p="10px">
              <Button 
                  as="a" 
                  href='/resume.pdf'
                  outline={'none'}
                  download
                  bgColor={'blue.400'}
                  color={'white'}
                  _hover={'blue.600'}
                  > 
                  Download CV <DownloadIcon mx='2px' ml={2} />
              </Button>
            </Box>
          </Box>
        </Box>
        <Spacer />
        <Box flexShrink="0" mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Image
            boxSize="250px"
            objectFit="cover"
            src="/images/man.png"
            alt="my profile"
            display={{ base: "none", md: "block", lg: "block" }}
          />
        </Box>
      </Flex>
    </Box>
  );
}
