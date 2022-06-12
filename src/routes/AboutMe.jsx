import React from "react";
import { 
  Box, 
  Text, 
  Heading,
  Stack,
  Flex,
  Spacer,
  useColorModeValue
} from "@chakra-ui/react";
import { useTypewriter } from 'react-simple-typewriter';


export default function AboutMe() {

  const aboutAfterContentBg = useColorModeValue("#000", "#fff")

  const {text} = useTypewriter({
    words: ['Richer', 'Smarter', 'Happier'],
    loop: 0,
    typeSpeed: 70,
    cursorStyle: '|'
  })

  return (
    <Box my={["3em", "4em"]} mx={["2em", "3em"]} id="about">
      <Heading
        fontSize={["18px", "20px", "24px", "35px"]}
        mb="0.5em"
        fontFamily={'"Public Sans", sans-serif'}
        _after={{content: '""', display: 'block', bgColor: aboutAfterContentBg, width: '6%', height: '5px', mt: 2}}
      >
        About me
      </Heading>
      <Stack mt={20} spacing={5}>
        <Flex 
          justifyContent={'space-between'} 
          alignItems={'flex-start'} 
          direction={{base: 'column', md: 'row', lg: 'row'}}
          spacing={10}
          my={{base: 5, md: 10, lg: 10}}
          rowGap={5}
          columnGap={7}
          >
          <Box data-aos="fade-right">
          <video controls autoplay loop>
            <source src="/about-me.mp4" type="video/mp4" />
          </video>
          </Box>
          <Spacer />
            <Text fontSize={["14", "16", "19", "20"]} fontWeight="400" fontFamily={'"Public Sans", sans-serif'} data-aos="zoom-in">
            I'm a Fullstack developer with a passion for developing scalable web
            applications. Growing my skillset, great
            collaboration with teams while contributing to the positive outcome of
            making people{" "}
            {/* <b>{text}</b> */}
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
}
