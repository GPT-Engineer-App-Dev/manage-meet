import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="brand.800" color="white" py={4} mt={10}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" px={4}>
        <Text>&copy; {new Date().getFullYear()} EventManager. All rights reserved.</Text>
        <Flex mt={{ base: 4, md: 0 }}>
          <Link href="https://facebook.com" isExternal mx={2}>
            <FaFacebook />
          </Link>
          <Link href="https://twitter.com" isExternal mx={2}>
            <FaTwitter />
          </Link>
          <Link href="https://instagram.com" isExternal mx={2}>
            <FaInstagram />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;