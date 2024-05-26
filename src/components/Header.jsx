import React from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
  Button,
  useDisclosure,
  HStack,
  VStack,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        colorScheme="purple"
        top={4}
        left={4}
        w={10}
        h={10}
        p={0}
        borderRadius={'full'}
        onClick={onOpen}
        mb={'10'}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Video Hub</DrawerHeader>
          <DrawerCloseButton top={4} right={4} />
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button variant={'ghost'} onClick={onClose} colorScheme="purple">
                <Link to="/">Home</Link>
              </Button>
              <Button variant={'ghost'} onClick={onClose} colorScheme="purple">
                <Link to="/videos">Videos</Link>
              </Button>
              <Button variant={'ghost'} onClick={onClose} colorScheme="purple">
                <Link to="/videos?category=free-videos">Free Videos</Link>
              </Button>
              <Button variant={'ghost'} onClick={onClose} colorScheme="purple">
                <Link to="/upload">Upload Videos</Link>
              </Button>
            </VStack>
            <HStack
              w={'full'}
              justifyContent={'space-around'}
              pos={'absolute'}
              bottom={4}
              left={0}
            >
              <Button variant={'solid'} colorScheme="purple" onClick={onClose}>
                <Link to="/signin">Sign In</Link>
              </Button>
              <Button
                variant={'outline'}
                colorScheme="purple"
                onClick={onClose}
              >
                <Link to="/signup">Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
