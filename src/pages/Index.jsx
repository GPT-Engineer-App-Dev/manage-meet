import { Container, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import UpcomingEvents from "../components/UpcomingEvents";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Navbar />
      <Hero />
      <UpcomingEvents />
      <Footer />
    </Container>
  );
};

export default Index;