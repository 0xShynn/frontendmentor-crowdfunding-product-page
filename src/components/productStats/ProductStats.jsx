import {
  Box,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectBackers } from '../../features/backers/backersSlice';
import { selectFunds } from '../../features/funds/fundsSlice';
import ProgressBar from '@ramonak/react-progress-bar';

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

  useEffect(() => {
    console.log('hello');
  }, []);

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
      <Box py="4">
        <ProgressBar
          completed={10}
          height="10px"
          bgColor="hsl(176, 50%, 47%)"
          baseBgColor="#F4F4F4"
          isLabelVisible={false}
        />
      </Box>
    </>
  );
};

export default ProductStats;
