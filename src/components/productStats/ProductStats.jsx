import { Flex, Heading, Stack, StackDivider, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectBackers } from '../../features/backers/backersSlice';
import { selectFunds } from '../../features/funds/fundsSlice';

const ProductStatItem = ({ title, desc }) => {
  return (
    <Flex flex="1" direction="column" textAlign={['center', 'left']}>
      <Heading mb="1">{title}</Heading>
      <Text>{desc}</Text>
    </Flex>
  );
};

const ProductStats = () => {
  const totalBackers = useSelector(selectBackers);
  const totalFunds = useSelector(selectFunds);

  return (
    <>
      <Stack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={['5', '10']}
        align="center"
        direction={['column', 'row']}
        mb="4"
      >
        <ProductStatItem title={`$${totalFunds}`} desc="of $100.000 backed" />
        <ProductStatItem title={totalBackers} desc="total backers" />
        <ProductStatItem title="56" desc="days left" />
      </Stack>
    </>
  );
};

export default ProductStats;
