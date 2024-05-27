import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Hero = () => {
  return (
    <Box bg="brand.700" color="white" py={20} textAlign="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">
          Manage Your Events Seamlessly
        </Heading>
        <Text fontSize="lg">
          Create, manage, and share your events with ease.
        </Text>
        <Button as={RouterLink} to="/create-event" colorScheme="teal" size="lg">
          Create Event
        </Button>
      </VStack>
    </Box>
  );
};

export default Hero;