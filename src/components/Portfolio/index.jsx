import React from "react";
import data from "../../data.json";
import {
  Box,
  Text,
  SimpleGrid,
  Image,
  Button,
  Heading,
  useColorModeValue,
  Flex
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub } from 'react-icons/fa'
import Reveal  from "react-reveal/Reveal";

export default function PortfolioComponent() {
  const bg = useColorModeValue("rgb(2,0,36)", "#fff");
  const color = useColorModeValue("#fff", "rgb(2,0,36)");
  const bgColor = useColorModeValue("#fff", "rgb(2,0,36)");
  const boxShadow = useColorModeValue(
    "2px 5px 10px rgb(2,0,36)",
    "2px 9px 15px #fff"
  );
  const items = data.projects;
  const styleLink = {
    margin: "auto",
    width: "100%",
  };
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
      <SimpleGrid
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
              marginTop="0.5em"
            >
              {item.title}
            </Heading>
            <Text
              w={["100%", null, "100%"]}
              margin="1em auto"
              letterSpacing={1}
            >
              {item.description}
            </Text>
            <Flex justifyContent={'space-between'} alignItems={'center'} columnGap={'1em'}>
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
      </SimpleGrid>
    </>
  );
}
