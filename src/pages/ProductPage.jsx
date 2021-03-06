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
import ThankYouModal from '../components/ThankYouModal';
import ProductStats from '../components/productStats/ProductStats';

import imageHeroDesktop from '../assets/images/image-hero-desktop.jpg';
import imageHeroMobile from '../assets/images/image-hero-mobile.jpg';
import logoMasterCraft from '../assets/svg/logo-mastercraft.svg';
import ProductStack from '../components/ProductStack';
import AuthorBanner from '../components/AuthorBanner';

const ProductPage = () => {
  const {
    isOpen: productModalIsOpen,
    onClose: productModalOnClose,
    onOpen: productModalOnOpen,
  } = useDisclosure();
  const {
    isOpen: thankYouModalIsOpen,
    onOpen: thankYouModalOnOpen,
    onClose: thankYouModalOnClose,
  } = useDisclosure();

  return (
    <Box>
      <ThankYouModal
        isOpen={thankYouModalIsOpen}
        onClose={thankYouModalOnClose}
        onOpen={thankYouModalOnOpen}
      />
      <ProductModal
        isOpen={productModalIsOpen}
        onClose={productModalOnClose}
        thankYouModalOnOpen={thankYouModalOnOpen}
      />

      <Box
        bgImage={{ base: imageHeroMobile, md: imageHeroDesktop }}
        h="400px"
        bgPos="top"
        bgRepeat="no-repeat"
        bgSize={{ base: 'contain', sm: 'cover' }}
      >
        <Box
          bg="linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%);"
          w="full"
          h="200px"
          pos="absolute"
          zIndex="base"
        />
        <Flex
          maxW="1120px"
          justify="center"
          direction="column"
          mx="auto"
          pb={['10', '18', '24']}
        >
          <Header />
          <Flex justify="center" direction="column" mx="6" role="main">
            <Container
              mt={{ base: '14', md: '0' }}
              pos="relative"
              textAlign="center"
              pb="10"
              role="region"
            >
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
              <Heading
                fontSize={{ base: 'xl', md: '2xl' }}
                mb="4"
                px="4"
                as="h1"
              >
                Mastercraft Bamboo Monitor Riser
              </Heading>
              <Text fontSize={['sm', 'md']} mb={{ base: 6, md: 8 }}>
                A beautiful & handcrafted monitor stand to reduce neck and eye
                strain.
              </Text>
              <Flex direction="row" justify="space-between">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={
                    productModalIsOpen
                      ? productModalOnClose
                      : productModalOnOpen
                  }
                >
                  Back this project
                </Button>
                <ButtonBookmark />
              </Flex>
            </Container>

            <Container role="region">
              <ProductStats />
            </Container>

            <Container role="region">
              <Heading as="h3" fontSize="lg" mb="6" mt="4">
                About this project
              </Heading>
              <Text mb="10">
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

              <ProductStack openThankYouModal={thankYouModalOnOpen} />
            </Container>
            <AuthorBanner />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductPage;
