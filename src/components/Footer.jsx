import React from 'react';
import {
  AiOutlineSend,
  AiOutlineFacebook,
  AiOutlineYoutube,
} from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import {
  Box,
  Stack,
  VStack,
  Input,
  Heading,
  HStack,
  Button,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'8'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack
          w={'full'}
          alignItems={'stretch'}
          // justifyContent={'center'}
        >
          <Heading size={'md'} textTransform={'uppercase'}>
            Subscribe for latest news
          </Heading>
          <HStack py={'2'} borderBottom={'2px solid white'}>
            <Input
              placeholder="Enter Your Email Here"
              focusBorderColor="none"
              border={'none'}
              outlineColor={'none'}
              borderRadius={'none'}
            ></Input>
            <Button
              p={'none'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
          my={'4'}
        >
          <Heading textTransform={'uppercase'}>Video Hub</Heading>
          <Text>All Rights Reserved</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'}>Social Media</Heading>
          <Stack direction={['row', 'row']} spacing={'2rem'}>
            <Link to="http://www.youtube.com">
              <AiOutlineYoutube size={'2rem'} color="red" />
            </Link>
            <Link to="http://www.facebook.com">
              <AiOutlineFacebook size={'2rem'} color="blue" />
            </Link>
            <Link to="http://www.instagram.com">
              <FiInstagram size={'2rem'} color="purple" />
            </Link>
          </Stack>
        </VStack>
      </Stack>
    </Box>
  );
}

export default Footer;
