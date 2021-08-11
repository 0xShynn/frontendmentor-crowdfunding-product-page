import { Button, Image, Link, Text } from '@chakra-ui/react';
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
        rounded="full"
        aria-label="Bookmark this project"
      >
        <Image src={iconBookmark} w="53px" />
      </Link>

      <Button
        _hover={{ opacity: 0.7 }}
        roundedLeft="full"
        bg="gray.200"
        px="0"
        size="lg"
        display={['none', 'flex']}
        href="#"
        aria-label="Bookmark this project"
      >
        <Image src={iconBookmark} w="53px" aria-label="Bookmark icon" />
        <Text display={{ base: 'none', sm: 'flex' }} ml="3" mr="6">
          Bookmark
        </Text>
      </Button>
    </>
  );
};

export default ButtonBookmark;
