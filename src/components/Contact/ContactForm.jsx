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
    <Box id="contact" mx={{ base: "5em", md: "8em", lg: "12em" }} my="5em">
      <Heading
        as="h2"
        textAlign="center"
        fontSize={["20px", "25px", "30px", "36px"]}
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
