import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
  Input,
  Button,
} from "@chakra-ui/react";

function Form() {
  const initialFormData = Object.freeze({
    name: "",
    email: "",
    message: "",
  });
  const [input, setInput] = useState(initialFormData);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <Box id="contact" mx={{ base: "2em", md: "4em", lg: "6em" }} my="5em">
      <Heading
        as="h2"
        textAlign="center"
        fontSize={["28px", "34px", "39px", "45px"]}
        mb="1.5em"
      >
        Contact Me
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormLabel htmlFor="name" placeholder="Your name">
          Name
        </FormLabel>
        <Input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          isRequired
        />
        <FormLabel htmlFor="name" placeholder="Your name">
          Email Address
        </FormLabel>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          isRequired
        />
        <FormLabel htmlFor="name" placeholder="Your name">
          Message
        </FormLabel>
        <Textarea name="message" onChange={handleChange} isRequired />
        <Button type="submit" mt={5}>
          Message me
        </Button>
      </form>
    </Box>
  );
}

export default Form;
