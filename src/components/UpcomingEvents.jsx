import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const UpcomingEvents = () => {
  // Placeholder data for events
  const events = [
    { id: 1, title: "Event One", date: "2023-10-01", description: "Description for event one." },
    { id: 2, title: "Event Two", date: "2023-10-15", description: "Description for event two." },
    { id: 3, title: "Event Three", date: "2023-11-01", description: "Description for event three." },
  ];

  return (
    <Box py={10} px={4}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Upcoming Events
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {events.map((event) => (
          <Box key={event.id} p={5} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md">{event.title}</Heading>
            <Text mt={2}>{event.date}</Text>
            <Text mt={2}>{event.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default UpcomingEvents;