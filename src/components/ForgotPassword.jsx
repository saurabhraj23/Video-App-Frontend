import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
  HStack,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const inputRef = useRef(null);

  const handleConfirmEmail = event => {
    if (validateEmail(inputRef.current.value)) {
      setIsButtonClicked(true);
      setIsSubmitted(false);
    } else {
      console.log('Enter Correct Email Address');
    }
  };

  const validateEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          w={['full', '96']}
          m={'auto'}
          spacing={['4', '8']}
        >
          <Heading textAlign={'center'}>Reset Your Password</Heading>
          <Input
            ref={inputRef}
            placeholder="Enter Your Recovery Email"
            type="email"
            required
            focusBorderColor="purple.500"
          />
          {isSubmitted && (
            <Text fontStyle={'italic'} fontSize={'0.8rem'} color={'green.600'}>
              Password has been Reset Successfully.
              <Text
                as={'span'}
                textDecoration={'underline'}
                color={'purple.600'}
                fontWeight={'600'}
              >
                <Link to="/signin">Sign In Here</Link>
              </Text>
            </Text>
          )}

          {isButtonClicked && (
            <>
              <Input
                placeholder="Enter OTP"
                type="text"
                required
                focusBorderColor="purple.500"
              />
              <Text
                fontStyle={'italic'}
                fontSize={'0.8rem'}
                color={'green.600'}
              >
                OTP has been successfully sent to your email address
              </Text>
              <HStack justifyContent={'space-between'}>
                <Button
                  colorScheme="purple"
                  type="submit"
                  cursor={'pointer'}
                  visibility={!isButtonClicked ? 'hidden' : 'visible'}
                  onClick={event => {
                    setIsSubmitted(true);
                    setIsButtonClicked(false);
                    inputRef.current.value = '';
                    event.preventDefault();
                  }}
                >
                  Submit
                </Button>
                <Button
                  colorScheme="purple"
                  type="submit"
                  cursor={'pointer'}
                  visibility={!isButtonClicked && 'hidden'}
                  fontSize={['0.8rem', '1rem']}
                >
                  Send OTP Again
                </Button>
              </HStack>
            </>
          )}
          <Button
            colorScheme="purple"
            type="submit"
            cursor={'pointer'}
            onClick={handleConfirmEmail}
            visibility={isButtonClicked && 'hidden'}
          >
            Click to Confirm
          </Button>
        </VStack>
      </form>
    </Container>
  );
}

export default ForgotPassword;
