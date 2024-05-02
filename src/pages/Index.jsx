import { Box, Button, Flex, Heading, Input, Link, Stack, Text, VStack, Image, useColorModeValue } from "@chakra-ui/react";
import { FaSignInAlt, FaUserPlus, FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={8} maxWidth="500px" mx="auto">
      <Heading mb={6} textAlign="center">
        Welcome to Our Platform
      </Heading>
      <Image src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWxjb21lJTIwYmFubmVyfGVufDB8fHx8MTcxNDYyNTM1OHww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" mb={6} />
      <Flex justifyContent="space-between" mb={4}>
        <Button leftIcon={<FaSignInAlt />} colorScheme="teal" variant="solid">
          Sign In
        </Button>
        <Button leftIcon={<FaUserPlus />} colorScheme="blue" variant="outline">
          Sign Up
        </Button>
      </Flex>
      <Stack spacing={4}>
        <Input placeholder="Search..." size="lg" />
        <Button rightIcon={<FaSearch />} colorScheme="green" variant="solid">
          Search
        </Button>
      </Stack>
      <VStack spacing={4} mt={8}>
        <Link color={useColorModeValue("teal.500", "teal.200")} href="#">
          Home
        </Link>
        <Link color={useColorModeValue("teal.500", "teal.200")} href="#">
          About Us
        </Link>
        <Link color={useColorModeValue("teal.500", "teal.200")} href="#">
          Services
        </Link>
        <Link color={useColorModeValue("teal.500", "teal.200")} href="#">
          Contact
        </Link>
      </VStack>
    </Box>
  );
};

export default Index;
