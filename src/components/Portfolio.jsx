import React from "react";
import data from "../data.json";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";

function Portfolio() {
  const items = data.projects;
  return (
    <SimpleGrid
      columns={[1, null, 3]}
      spacing="40px"
      padding={5}
      margin="1.5em"
      justifyContent="center"
    >
      {items.map((item) => (
        <Box key={item.id}>
          <Text w={["100%", null, "70%"]}>{item.description}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default Portfolio;
