import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Header from '../components/Header';
import ButtonBookmark from '../components/ButtonBookmark';
import ProductModal from '../components/ProductModal';

import imageHeroDesktop from '../assets/images/image-hero-desktop.jpg';
import imageHeroMobile from '../assets/images/image-hero-mobile.jpg';
import logoMasterCraft from '../assets/svg/logo-mastercraft.svg';

const ProductPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box>
      <ProductModal isOpen={isOpen} onClose={onClose} />
      <Box
        bgImage={{ base: imageHeroMobile, md: imageHeroDesktop }}
        h="400px"
        bgPos="top"
        bgRepeat="no-repeat"
        bgSize={{ base: 'contain', sm: 'cover' }}
      >
        <Flex maxW="1120px" justify="center" direction="column" mx="auto">
          <Header />
          <Flex justify="center" direction="column" mx="6">
            <Container mt="20" pos="relative" textAlign="center" pb="10">
              <Flex justify="center" mb="6">
                <Image
                  src={logoMasterCraft}
                  h="56px"
                  pos="absolute"
                  top="-28px"
                  zIndex="base"
                  alt="Mastercraft logo"
                />
              </Flex>
              <Heading fontSize={{ base: 'xl', md: '2xl' }} mb="4" px="4">
                Mastercraft Bamboo Monitor Riser
              </Heading>
              <Text
                color="neutral.darkGray"
                fontSize={['sm', 'md']}
                mb={{ base: 6, md: 8 }}
              >
                A beautiful & handcrafted monitor stand to reduce neck and eye
                strain.
              </Text>
              <Flex direction="row" justify="space-between">
                <Button
                  variant="primary"
                  href="#"
                  onClick={isOpen ? onClose : onOpen}
                >
                  Back this project
                </Button>
                <ButtonBookmark />
              </Flex>
            </Container>

            <Container>
              <Heading as="h3" fontSize="lg" mb="6" mt="4">
                About this project
              </Heading>
              <Text mb="6">
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
                platform that elevates your screen to a more comfortable viewing
                height. Placing your monitor at eye level has the potential to
                improve your posture and make you comfortable while at work,
                helping you stay focused on the task at hand. <br />
                <br />
                Featuring artisan craftmanship, the simplicity of design creates
                extra desk space below your computer to allow notepads, pens and
                USB sticks to be stored under the stand.
              </Text>
            </Container>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductPage;
