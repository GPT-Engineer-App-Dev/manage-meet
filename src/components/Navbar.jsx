import { Box, Flex, Link, Spacer, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.800" px={4} py={2} color="white">
      <Flex alignItems="center">
        <Box fontWeight="bold" fontSize="xl">
          EventManager
        </Box>
        <Spacer />
        <Box>
          <Link as={RouterLink} to="/" px={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/events" px={2}>
            Events
          </Link>
          <Link as={RouterLink} to="/create-event" px={2}>
            Create Event
          </Link>
          <Link as={RouterLink} to="/profile" px={2}>
            Profile
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;