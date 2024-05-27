import { Box, Button, Container, Flex, Heading, HStack, Text, VStack, Link, SimpleGrid, Image } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.600" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">EventManager</Heading>
        <HStack spacing={8}>
          <Link href="#">Home</Link>
          <Link href="#">Events</Link>
          <Link href="#">Create Event</Link>
          <Link href="#">Profile</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="blue.500" color="white" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Manage Your Events Seamlessly</Heading>
        <Text fontSize="lg" mb={6}>Create, manage, and track your events with ease.</Text>
        <Button colorScheme="teal" size="lg">Create Event</Button>
      </Box>

      {/* Upcoming Events Section */}
      <Box as="section" py={20} px={4}>
        <Heading size="xl" textAlign="center" mb={10}>Upcoming Events</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {/* Example Event Card */}
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/400x200" alt="Event Image" />
            <Box p={6}>
              <Heading size="md" mb={2}>Event Title</Heading>
              <Text mb={4}>Event description goes here. It should be brief and enticing.</Text>
              <Button colorScheme="teal" size="sm">View Details</Button>
            </Box>
          </Box>
          {/* Repeat the above Box for more events */}
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={10} textAlign="center">
        <VStack spacing={4}>
          <Text>Contact us: info@eventmanager.com</Text>
          <HStack spacing={4}>
            <Link href="#"><FaFacebook size="24px" /></Link>
            <Link href="#"><FaTwitter size="24px" /></Link>
            <Link href="#"><FaInstagram size="24px" /></Link>
          </HStack>
          <Text>&copy; 2023 EventManager. All rights reserved.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;