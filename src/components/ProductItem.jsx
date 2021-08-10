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
  return (
    <Container
      rounded="lg"
      borderWidth="2px"
      mb="0"
      p="0"
      borderColor={value === selectedValue ? 'primary.modeCyan' : 'gray.100'}
    >
      <Box p="6">
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
      </Box>
      <Flex
        direction={{ base: 'column', sm: 'column' }}
        align="center"
        p="6"
        borderTopWidth="1px"
        display={value === selectedValue ? 'flex' : 'none'}
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
