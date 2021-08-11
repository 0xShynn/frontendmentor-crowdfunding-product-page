import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Radio,
  Text,
} from '@chakra-ui/react';

const ProductItem = ({
  title,
  desc,
  minPledgeAmount,
  ticketsLeft,
  value,
  selectedValue,
}) => {
  const itemZero = value === '0';

  return (
    <Container
      rounded="lg"
      borderWidth="2px"
      mb="0"
      mx="0"
      p="0"
      borderColor={value === selectedValue ? 'primary.modeCyan' : 'gray.100'}
    >
      <Box p="6">
        {/* mobile header */}
        <Flex display={['flex', 'none']} align="center" mb="4">
          <Flex pr="4" align="flex-start">
            <Radio
              size="lg"
              value={value}
              _checked={{
                borderColor: 'gray.100',
                borderWidth: '4px',
                bg: 'primary.modeCyan',
                outlineColor: 'red',
              }}
              borderColor="gray.200"
            />
          </Flex>
          <Flex direction="column">
            <Heading as="h3" fontSize="sm" mr={['0', '4']} mb={['1', '0']}>
              {title}
            </Heading>
            <Text
              fontWeight="bold"
              fontSize="sm"
              color="primary.modeCyan"
              display={itemZero ? 'none' : 'inline'}
            >
              Pledge ${minPledgeAmount} or more
            </Text>
          </Flex>
        </Flex>

        <Box display={['block', 'none']}>
          <Text mb="4">{desc}</Text>
        </Box>

        {/* desktop header */}
        <Flex display={['none', 'flex']}>
          <Flex pr="4" pt="0.5" align="flex-start" mt={itemZero ? '0' : '1'}>
            <Radio size="lg" colorScheme="cyan" value={value} />
          </Flex>

          <Box>
            <Flex
              direction={['column', 'row']}
              mb="3"
              align={['flex-start', 'center']}
            >
              <Heading as="h3" fontSize="md" mr={['0', '4']} mb={['1', '0']}>
                {title}
              </Heading>

              <Text
                fontWeight="bold"
                color="primary.modeCyan"
                mr="2"
                display={itemZero ? 'none' : 'inline'}
              >
                Pledge ${minPledgeAmount} or more
              </Text>

              <Flex
                align="center"
                justify="flex-end"
                display={{
                  base: 'none',
                  sm: itemZero ? 'none' : 'flex',
                }}
                flex="1"
              >
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
            </Flex>
            <Text mb="4">{desc}</Text>
          </Box>
        </Flex>

        <Flex
          display={selectedValue === value && itemZero ? 'flex' : 'none'}
          justify="flex-end"
        >
          <Button variant="primary" size="md">
            Continue
          </Button>
        </Flex>

        <Flex
          align="center"
          display={{ base: itemZero ? 'none' : 'flex', sm: 'none' }}
        >
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
      </Box>

      <Flex
        direction={{ base: 'column', sm: 'column' }}
        align="center"
        p="6"
        borderTopWidth="1px"
        display={value === selectedValue && value !== '0' ? 'flex' : 'none'}
      >
        <Text mb="4">Enter your pledge</Text>
        <Flex justify="space-between" w="full">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              fontSize="sm"
              fontWeight="bold"
              color="gray.400"
              children="$"
            />
            <Input
              placeholder={minPledgeAmount}
              w="28"
              rounded="full"
              fontSize="sm"
              fontWeight="bold"
              inputMode="numeric"
              min={minPledgeAmount}
            />
          </InputGroup>

          <Button variant="primary" size="md">
            Continue
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default ProductItem;
