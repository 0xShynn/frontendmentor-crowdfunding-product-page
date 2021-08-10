import { Box, Container, Flex, Heading, Radio, Text } from '@chakra-ui/react';
import React from 'react';

const ProductItem = ({ title, desc, minPledgeAmount, ticketsLeft, value }) => {
  return (
    <Container rounded="lg" border="2px" mb="0">
      <Flex mb="6">
        <Flex pr="3">
          <Radio size="lg" colorScheme="cyan" value={value} className="box" />
        </Flex>
        <Box>
          <Heading
            as="h3"
            fontSize="md"
            _groupChecked={{ backgroundColor: 'red' }}
          >
            {title}
          </Heading>
          <Text color="primary.modeCyan">
            Pledge ${minPledgeAmount} or more
          </Text>
        </Box>
      </Flex>
      <Text mb="4">{desc}</Text>
      <Flex align="center">
        <Text
          fontWeight="bold"
          fontFamily="heading"
          color="black"
          fontSize="lg"
          mr="2"
        >
          {ticketsLeft}
        </Text>
        <Text fontSize="md">left</Text>
      </Flex>
    </Container>
  );
};

export default ProductItem;
