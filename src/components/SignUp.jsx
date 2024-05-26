import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import React, { useState } from 'react';

function SignUp() {
  const [value, setValue] = useState('0');
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          w={['full', '96']}
          m={'auto'}
          spacing={['4', '8']}
        >
          <Heading textAlign={'center'}>Create Your Account</Heading>
          <Input
            placeholder="First Name"
            type="text"
            required
            focusBorderColor="purple.500"
          />
          <Input
            placeholder="Last Name"
            type="text"
            required
            focusBorderColor="purple.500"
          />
          <VStack alignItems={'flex-start'}>
            <Text color={'purple.500'} fontWeight={'600'}>
              Date of Birth
            </Text>
            <Input
              placeholder="Date of Birth"
              type="date"
              required
              focusBorderColor="purple.500"
              colorScheme={'purple.500'}
            />
          </VStack>
          <VStack alignItems={'flex-start'}>
            <Text color="purple.500" fontWeight={'600'}>
              Gender
            </Text>
            <RadioGroup
              spacing={5}
              onClick={e => setValue(e.target.value)}
              value={value}
              colorScheme="purple"
            >
              <Radio mr={'1rem'} value="1">
                Male
              </Radio>
              <Radio value="2">Female</Radio>
            </RadioGroup>
          </VStack>

          <Input
            placeholder="Enter your email "
            type="email"
            required
            focusBorderColor="purple.500"
          />
          <Input
            placeholder="Enter your password"
            type="password"
            required
            focusBorderColor="purple.500"
          />
          <Input
            placeholder="Confirm your password"
            type="password"
            required
            focusBorderColor="purple.500"
          />

          <Button colorScheme="purple" type="submit" cursor={'pointer'}>
            Create Account
          </Button>
        </VStack>
      </form>
    </Container>
  );
}

export default SignUp;
