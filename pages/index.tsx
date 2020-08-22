// import Head from 'next/head';

import { Heading, Grid, Flex, Link, Button, Text } from '@chakra-ui/core';
import Divider from '../components/Divider';
import Input from '../components/Input';

export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
        <img src="/rocketseat.svg" alt="Rocketseat" />

        <Heading size="2xl" lineHeight="shorter" marginTop="=">
          Join our brand new NextJS platform
        </Heading>
      </Flex>

      <Flex
        gridArea="form"
        height="100%"
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={16}
      >
        <Input placeholder="Email" />
        <Input placeholder="Password" marginTop={2} />
        <Link
          alignSelf="flex-start"
          marginTop={2}
          fontSize="sm"
          color="purple.600"
          fontWeight="bold"
          _hover={{ color: 'purple.500' }}
        >
          Forgot password?
        </Link>

        <Button
          marginTop={6}
          backgroundColor="purple.500"
          height="50px"
          borderRadius="sm"
          _hover={{ backgroundColor: 'purple.600' }}
        >
          LOG IN
        </Button>

        <Text textAlign="center" fontSize="sm" color="gray.300" marginTop={6}>
          Don't have an account?{' '}
          <Link
            color="purple.600"
            fontWeight="bold"
            _hover={{ color: 'purple.500' }}
          >
            Sign up
          </Link>
        </Text>

        <Divider />

        <Flex alignItems="center">
          <Text fontSize="sm">Or enter with</Text>
          <Button
            height="50px"
            flex="1"
            backgroundColor="gray.600"
            marginLeft={6}
            borderRadius="sm"
            _hover={{ backgroundColor: 'purple.500' }}
          >
            GITHUB
          </Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
