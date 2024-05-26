import React from 'react';
import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react';
import { useState } from 'react';
import check from '../assets/check.mp4';
import check2 from '../assets/check2.mp4';

function Videos() {
  const videoArr = [check, check2];
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');

  const [videosrc, setvideosrc] = useState(videoArr[0]);
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'} px={'4'}>
        <video
          controls
          controlsList="nodownload"
          src={videosrc}
          style={{ width: '100%', height: '70vh' }}
        ></video>
        <VStack
          alignItems={'flex-start'}
          w={'full'}
          px={'4'}
          overflowY={'auto'}
        >
          <Heading>{heading}</Heading>
          <Text>{description}</Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        overflowY={'auto'}
        pr={'4'}
        pb={'2'}
        spacing={'4'}
        alignItems={'stretch'}
      >
        {videoArr.map((item, idx) => {
          return (
            <Button
              variant={'ghost'}
              colorScheme="purple"
              onClick={event => {
                setvideosrc(item);
                setHeading('Lecture ' + idx + 1);
                setDescription('This is only for description here ');
              }}
            >
              Lecture {idx + 1}
            </Button>
          );
        })}
      </VStack>
    </Stack>
  );
}

export default Videos;
