import { Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import IconBookmark from '../assets/svg/IconBookmark';

const ButtonBookmark = () => {
  const [bookmarked, setBookmarked] = useState(false);
  const bgColorBookmark = bookmarked ? 'hsl(176, 50%, 47%)' : 'black';
  const colorBookmark = bookmarked ? 'white' : '#B1B1B1';

  return (
    <>
      <Flex
        display={['flex', 'none']}
        ml="2"
        rounded="full"
        aria-label="Bookmark this project"
      >
        <IconBookmark
          size="58"
          bgcolor={bgColorBookmark}
          color={colorBookmark}
          onClick={() => {
            setBookmarked(!bookmarked);
          }}
        />
      </Flex>

      <Button
        _hover={{ opacity: 0.7 }}
        roundedLeft="full"
        bg="gray.200"
        px="0"
        size="lg"
        display={['none', 'flex']}
        aria-label="Bookmark this project"
        onClick={() => {
          setBookmarked(!bookmarked);
        }}
      >
        <IconBookmark
          size="58"
          bgcolor={bgColorBookmark}
          color={colorBookmark}
        />
        <Text
          display={{ base: 'none', sm: 'flex' }}
          ml="3"
          mr="6"
          color={bookmarked ? 'primary.modeCyan' : 'gray.500'}
        >
          {bookmarked ? 'Bookmarked' : 'Bookmark'}
        </Text>
      </Button>
    </>
  );
};

export default ButtonBookmark;
