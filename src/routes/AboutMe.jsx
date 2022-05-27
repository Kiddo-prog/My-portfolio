import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { useTypewriter } from 'react-simple-typewriter'

export default function AboutMe() {
  const {text} = useTypewriter({
    words: ['Richer', 'Smarter', 'Happier'],
    loop: 0,
    typeSpeed: 70,
    cursorStyle: '|'
  })

  return (
    <Box my={["3em", "4em"]} mx={["2em", "3em"]}>
      <Heading
        fontSize={["18px", "20px", "24px", "35px"]}
        mb="1em"
        fontStyle="italic"
        ml="1em"
      >
        About me
      </Heading>
      <Text fontSize={["14", "16", "19", "22"]} fontWeight="400">
        Fullstack developer with a passion for developing scalable web
        applications. Growing my skillset, great
        collaboration with teams while contributing to the positive outcome of
        making people{" "}
        <b>
          <i>{text}</i>
        </b>
      </Text>
    </Box>
  );
}