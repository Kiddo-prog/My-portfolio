import React from "react";
import data from "../../data.json";
import {
  Box,
  Image,
  Button,
  Heading,
  Spacer,
  Flex,
  Text,
  Stack,
  HStack
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub } from 'react-icons/fa'

export default function PortfolioComponent() {
  const items = data.projects;
  

  return (
    <>
      <Heading
        fontSize={["18px", "20px", "24px", "35px"]}
        mb="2em"
        fontStyle="italic"
        ml="2em"
      >
        Portfolio
      </Heading>
      <Box marginX={10}>  
          {
            items.map(item => (
              <Flex key={item.id} alignItems={'flex-start'} flexDirection={{base: 'column', md: 'row', lg:'row'}} justifyContent={'space-around'}>

                <Box flex="5" mb={10} data-aos="fade-right">
                  <Image src={item.image} alt="portfolio" objectFit="contain" />
                </Box>
              <Spacer />
              <Box flex="5" mb={10} data-aos="fade-left">
                <Heading fontFamily={'"Public Sans", sans-serif'} mb={5} fontSize={["18px", "20px", "24px", "35px"]}>{item.title}</Heading>
                <Text fontFamily={'"Public Sans", sans-serif'} fontSize={["14", "16", "19", "20"]}>{item.description}</Text>
                <Box marginY={5}>
                  {
                    item.tools.map((tool, index) => (
                      <Button key={index} mr={2} bgColor={'blue.600'} mt={3} color={'white'}  _hover={{bgColor: 'blue.800'}} disabled>{tool}</Button>
                    ))
                  }
                </Box>
                <Stack mt={5}>
                  <HStack>
                    <Button as="a" href={item.link} bgColor={'blue.600'} color={'white'} _hover={{bgColor: 'blue.800'}} rightIcon={<ExternalLinkIcon />}>Live</Button>
                    <Button as="a" href={item.github} rightIcon={<FaGithub />}>Code</Button>
                  </HStack>
                </Stack>
              </Box>
              </Flex>
            ))
          }
      </Box>
    </>
  );
}
