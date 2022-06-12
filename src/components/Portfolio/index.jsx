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
                <Heading fontFamily={'"Public Sans", sans-serif'} mb={5}>{item.title}</Heading>
                <Text fontFamily={'"Public Sans", sans-serif'}>{item.description}</Text>
                <Box marginY={5}>
                  {
                    item.tools.map((tool, index) => (
                      <Button key={index} mr={2} bgColor={'blue.600'} mt={3} color={'white'} _hover={{bgColor: 'blue.800'}} disabled>{tool}</Button>
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
      {/* <SimpleGrid
        columns={[1, null, 2, 3]}
        spacing="40px"
        padding={5}
        margin="1.5em"
        placeContent="center"
        justifyItems="center"
      >
        <Reveal effect="fadeInUp">
        {items.map((item) => (
          <Box
            key={item.id}
            padding={3}
            borderRadius="10px"
            bg={bg}
            color={color}
            boxShadow={boxShadow}
            _hover={{ transform: "scale(1.05)", transition: "0.6s ease-out" }}
          >
            <Image src={item.image} alt="portfolio" objectFit="contain" />
            <Heading
              textAlign="center"
              fontSize={["15px", "20px", "25px", "27px"]}
              marginTop="1em"
            >
              {item.title}
              {item.bash}
            </Heading>
            <Flex justifyContent={'space-between'} alignItems={'center'} columnGap={'1em'} mt={'2em'}>
              <Button
                as={"a"}
                target={'_blank'}
                href={item.link}
                bgColor={bgColor}
                style={styleLink}
                color={color}
                type="button"
              >
                <ExternalLinkIcon color={bg} />
              </Button>
              <Button
                as={"a"}
                target={'_blank'}
                href={item.github}
                style={styleLink}
                bgColor={bgColor}
                color={color}
                type="button"
              >
                <FaGithub color={bg} />
              </Button>
            </Flex>
          </Box>
        ))}
        </Reveal>
      </SimpleGrid> */}
    </>
  );
}
