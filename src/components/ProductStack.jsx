import {
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewBacker } from '../features/backers/backersSlice';
import { addFunds } from '../features/funds/fundsSlice';
import { addOrder, selectProducts } from '../features/products/productsSlice';

const ProductStackItem = ({ title, desc, quantity, minPledgeAmount, id }) => {
  const dispatch = useDispatch();
  function handleOrder() {
    if (quantity > 0) {
      dispatch(addNewBacker());
      dispatch(addFunds(minPledgeAmount));
      dispatch(addOrder(id, 1));
    }
  }

  return (
    <Container p={['6', '8']} opacity={quantity === 0 ? '0.5' : '1'} m="0">
      <Flex justify="space-between" mb="6" direction={['column', 'row']}>
        <Heading as="h3" fontSize="lg">
          {title}
        </Heading>
        <Text color="primary.modeCyan" fontSize="14px" fontWeight="bold">
          Pledge ${minPledgeAmount} or more
        </Text>
      </Flex>
      <Text mb={['4', '10']}>{desc}</Text>
      <Flex justify="space-between" direction={['column', 'row']}>
        <Flex align="center" mb={{ base: '4', md: '0' }}>
          <Text fontSize="3xl" fontWeight="bold" color="black" mr="2" pb="1">
            {quantity}
          </Text>
          <Text color="gray.500">left</Text>
        </Flex>
        <Button
          variant={quantity > 0 ? 'primary' : 'disabled'}
          size="md"
          py="6"
          w={{ base: 'fit-content', md: 'auto' }}
          onClick={handleOrder}
          cursor={quantity > 0 ? 'pointer' : 'not-allowed'}
        >
          {quantity > 0 ? 'Select Reward' : 'Out of Stock'}
        </Button>
      </Flex>
    </Container>
  );
};

const ProductStack = () => {
  const products = useSelector(selectProducts);
  return (
    <VStack spacing="6">
      {products.products.slice(1).map((product) => {
        return (
          <ProductStackItem
            key={product.id}
            id={product.id}
            title={product.title}
            desc={product.desc}
            minPledgeAmount={product.minPledgeAmount}
            quantity={product.quantity}
          />
        );
      })}
    </VStack>
  );
};

export default ProductStack;
