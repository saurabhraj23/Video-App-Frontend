import {
  Container,
  VStack,
  Input,
  Button,
  HStack,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
function UploadVideos() {
  return (
    <Container maxW={'container.xl'} h={'100vh'}>
      <VStack color={'purple.600'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'} />
        <form>
          <Stack direction={['column', 'row']}>
            <Input
              required
              type="file"
              css={{
                '&::file-selector-button': {
                  border: 'none',
                  cursor: 'pointer',
                  width: '40%',
                  marginLeft: '-18px',
                  height: '100%',
                  color: 'purple',
                  bgColor: 'white',
                },
              }}
            />
            <Button colorScheme="purple" type="submit">
              Upload
            </Button>
          </Stack>
        </form>
      </VStack>
    </Container>
  );
}

export default UploadVideos;
