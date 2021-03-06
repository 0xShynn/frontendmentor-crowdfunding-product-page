import {
  Box,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectBackers } from '../../features/backers/backersSlice';
import { selectFunds } from '../../features/funds/fundsSlice';
import ProgressBar from '@ramonak/react-progress-bar';

const ProductStatItem = ({ title, desc, ariaLabel }) => {
  return (
    <Flex flex="1" direction="column" textAlign={['center', 'left']}>
      <Heading mb="1" as="h2" aria-label={ariaLabel}>
        {title}
      </Heading>
      <Text color="gray.500">{desc}</Text>
    </Flex>
  );
};

const ProductStats = () => {
  const totalBackers = useSelector(selectBackers);
  const totalFunds = useSelector(selectFunds);
  const crowdFundingGoal = useSelector((state) => state.funds.goal);
  const fundsProgression = (totalFunds * 100) / crowdFundingGoal;

  return (
    <>
      <Stack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={['5', '10']}
        align="center"
        direction={['column', 'row']}
        mb="4"
      >
        <ProductStatItem
          title={`$${totalFunds}`}
          desc="of $100.000 backed"
          ariaLabel="Total funds collected"
        />
        <ProductStatItem
          title={totalBackers}
          desc="total backers"
          ariaLabel="Total backers"
        />
        <ProductStatItem
          title="56"
          desc="days left"
          ariaLabel="Project days countdown"
        />
      </Stack>
      <Box py="4">
        <ProgressBar
          completed={fundsProgression}
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
