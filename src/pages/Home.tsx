import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/Header';
import imageHeroDesktop from '../assets/images/image-hero-desktop.jpg';
import imageHeroMobile from '../assets/images/image-hero-mobile.jpg';
import logoMasterCraft from '../assets/svg/logo-mastercraft.svg';

const Home = () => {
  return (
    <Box>
      <Box
        bgImage={{ base: imageHeroMobile, md: imageHeroDesktop }}
        h="400px"
        bgPos="top"
        bgRepeat="no-repeat"
        bgSize={{ base: 'contain', sm: 'cover' }}
      >
        <Flex maxW="1120px" justify="center" direction="column" mx="auto">
          <Header />
          <Flex justify="center">
            <Box
              bg="white"
              rounded="xl"
              p="6"
              mx="6"
              w={{ md: '640px', lg: '730px' }}
              maxW="730px"
              mt="20"
              textAlign="center"
              pos="relative"
            >
              <Flex justify="center" mb="6">
                <Image
                  src={logoMasterCraft}
                  h="56px"
                  pos="absolute"
                  top="-28px"
                  zIndex="base"
                />
              </Flex>
              <Heading fontSize={{ base: 'xl', md: '2xl' }} mb="4" px="4">
                Mastercraft Bamboo Monitor Riser
              </Heading>
              <Text color="neutral.darkGray" fontSize="sm" mb="4">
                A beautiful & handcrafted monitor stand to reduce neck and eye
                strain.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
