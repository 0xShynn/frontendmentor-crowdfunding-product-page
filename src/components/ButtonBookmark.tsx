import { Box, Button, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import iconBookmark from '../assets/svg/icon-bookmark.svg';

const ButtonBookmark = () => {
  return (
    <>
      <Link
        display={['flex', 'none']}
        href="#"
        ml="2"
        _hover={{ opacity: 0.7 }}
      >
        <Image src={iconBookmark} w="53px" />
      </Link>

      <Button
        _hover={{ opacity: 0.7 }}
        roundedLeft="full"
        paddingLeft="0"
        py={{ base: '26px', md: '28px' }}
        display={['none', 'flex']}
      >
        <Box roundedLeft="full">
          <Image src={iconBookmark} w="53px" />
        </Box>
        <Text display={{ base: 'none', sm: 'flex' }} ml="3" mr="2">
          Bookmark
        </Text>
      </Button>
    </>
  );
};

export default ButtonBookmark;
