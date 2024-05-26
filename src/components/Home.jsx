import { Box, Image, Heading, Container, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  p: '0',
  textTransform: 'uppercase',
  bgColor: 'blackAlpha.600',
  color: 'white',
  size: ['xl', '4xl'],
};

const carousal = {
  w: 'full',
  h: ['30vh', '100vh'],
};
function Home() {
  return (
    <Box>
      <MyCarousel />
    </Box>
  );
}

const MyCarousel = () => {
  return (
    <Box>
      <Carousel
        autoPlay
        showThumbs={false}
        infiniteLoop
        interval={1000}
        showStatus={false}
        showArrows={false}
      >
        <Box {...carousal}>
          <Image src={img1} />
          <Heading {...headingOptions}>Watch On VR</Heading>
        </Box>

        <Box {...carousal}>
          <Image src={img2} />
          <Heading {...headingOptions}>Future is Gaming</Heading>
        </Box>

        <Box {...carousal}>
          <Image src={img3} />
          <Heading {...headingOptions}>Gaming On Console</Heading>
        </Box>

        <Box {...carousal}>
          <Image src={img4} />
          <Heading {...headingOptions}>Night Mode On</Heading>
        </Box>
      </Carousel>
      <Container minW={'80%'} minH={'80vh'}>
        <Heading
          w={'fit-content'}
          alignItems={'center'}
          textTransform={'uppercase'}
          margin={'auto'}
          borderBottom={'2px solid'}
          py={'2'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image
            height={['40', '400']}
            src={img5}
            filter={'hue-rotate(-130deg)'}
          />
          <Text
            letterSpacing={'widest'}
            lineHeight={'180%'}
            p={['4', '8']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            sapien erat, iaculis ut sapien in, accumsan dapibus erat. Maecenas
            elementum egestas risus quis ullamcorper. Donec in pharetra arcu.
            Proin rutrum risus vitae eleifend pharetra. Quisque vel tellus
            congue, convallis purus et, pulvinar ligula. Sed at eros pharetra,
            aliquam justo sit amet, commodo justo. Nunc et nunc arcu. In elit
            dolor, semper a nisi pharetra, gravida sodales nunc. Cras at porta
            elit. Aliquam erat volutpat. Praesent pharetra odio ut feugiat
            tempus. Nullam et arcu laoreet, maximus enim feugiat, ultrices
            nulla. Curabitur tincidunt convallis turpis, et volutpat nisi
            laoreet sed. Morbi cursus metus lacus. Morbi viverra lectus eu purus
            mattis egestas. Pellentesque a tortor lacinia, rhoncus urna ac,
            malesuada augue. Sed non consequat diam. Praesent condimentum ligula
            at risus auctor bibendum. Nunc vel tristique sapien. In semper
            pulvinar fringilla. Etiam sodales rutrum maximus. Nam finibus arcu
            pulvinar dolor ultricies, et euismod lectus sodales. Ut nec ipsum
            porttitor neque aliquam facilisis. In purus massa, sodales a mattis
            eget, mattis scelerisque lacus. Vestibulum gravida odio vehicula
            lectus venenatis dignissim. Fusce diam dolor, malesuada ac mauris
            non, elementum rhoncus ipsum. Integer venenatis vestibulum feugiat.
            Praesent eu magna faucibus, scelerisque tellus eleifend, blandit
            odio. Sed non neque nibh. Ut
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
