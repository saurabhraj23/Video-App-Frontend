import React from 'react';
import {
  Button,
  Container,
  HStack,
  Heading,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
function SignIn() {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          w={['full', '96']}
          spacing={'8'}
          m={'auto'}
          my={'16'}
        >
          <Heading textAlign={'center'}>Welcome Back</Heading>
          <Input
            placeholder="Write your email here"
            type="email"
            required
            focusBorderColor="purple.500"
          />
          <Input
            placeholder="Write your password here"
            type="password"
            required
            focusBorderColor="purple.500"
          />
          <Button colorScheme="purple" type="submit" cursor={'pointer'}>
            Sign In
          </Button>
          <HStack justifyContent={'space-between'}>
            <Button variant={'link'} cursor={'pointer'}>
              <Link to="/signup">
                <Text fontSize={['0.60rem', '1rem']}>Create a New Account</Text>
              </Link>
            </Button>
            <Button variant={'link'} cursor={'pointer'}>
              <Link to="/forgotpassword">
                <Text fontSize={['0.60rem', '1rem']}>Forgot Password?</Text>
              </Link>
            </Button>
          </HStack>
        </VStack>
      </form>
    </Container>
  );
}

export default SignIn;
