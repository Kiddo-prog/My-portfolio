import React from "react";
import data from "../data.json";
import {
  Box,
  Text,
  SimpleGrid,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";

function Portfolio() {
  const items = data.projects;
  const styleLink = {
    display: "flex",
    margin: "auto",
    width: "100%",
  };
  return (
    <SimpleGrid
      columns={[1, null, 2, 3]}
      spacing="40px"
      padding={5}
      margin="1.5em"
      placeContent="center"
      justifyItems="center"
    >
      {items.map((item) => (
        <Box key={item.id} border="2px solid" padding={3}>
          <Image src={item.image} alt="portfolio" objectFit="contain" />
          <Heading
            textAlign="center"
            fontSize={["15px", "20px", "25px", "27px"]}
            marginTop="0.5em"
          >
            {item.title}
          </Heading>
          <Text w={["100%", null, "100%"]} margin="1em auto" letterSpacing={1}>
            {item.description}
          </Text>
          <Button style={styleLink}>
            <a href={item.link}>Visit</a>
          </Button>
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default Portfolio;
