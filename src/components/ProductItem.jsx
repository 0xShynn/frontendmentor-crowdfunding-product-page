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
  FormControl,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const CustomRadio = ({ value }) => (
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
    cursor="pointer"
  />
);

const ProductItem = ({
  title,
  desc,
  minPledgeAmount,
  ticketsLeft,
  value,
  selectedValue,
  onClose,
  thankYouModalOnOpen,
}) => {
  const itemZero = value === '0';

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(values);
        onClose();
        resolve();
        thankYouModalOnOpen();
      }, 3000);
    });
  }

  return (
    <Container
      rounded="lg"
      borderWidth="2px"
      mb="0"
      mx="0"
      p="0"
      borderColor={value === selectedValue ? 'primary.modeCyan' : 'gray.100'}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box p="6">
          {/* mobile header */}
          <Flex display={['flex', 'none']} align="center" mb="4">
            <Flex pr="4" align="flex-start">
              <CustomRadio value={value} />
            </Flex>
            <Flex direction="column">
              <Heading
                as="h3"
                fontSize="sm"
                mr={['0', '4']}
                mb={['1', '0']}
                color="black"
              >
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
              <CustomRadio value={value} />
            </Flex>

            <Box>
              <Flex
                direction={['column', 'row']}
                mb="3"
                align={['flex-start', 'center']}
              >
                <Heading
                  as="h3"
                  fontSize="md"
                  mr={['0', '4']}
                  mb={['1', '0']}
                  color="black"
                >
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
            <Button
              colorScheme="teal"
              size="md"
              onClick={onClose}
              w="28"
              py="6"
              px="12"
            >
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
          direction={{ base: 'column', sm: 'row' }}
          align="center"
          p="6"
          borderTopWidth="1px"
          borderTopColor="gray.300"
          display={value === selectedValue && value !== '0' ? 'flex' : 'none'}
        >
          <Flex flex="1">
            <Text mb={['4', '0']}>Enter your pledge</Text>
          </Flex>
          <Flex align="center">
            <FormControl isInvalid={errors.pledge} w="fit-content">
              <InputGroup w="max">
                <InputLeftElement
                  pointerEvents="none"
                  fontSize="sm"
                  p="6"
                  fontWeight="bold"
                  color="gray.500"
                  children="$"
                />
                <Input
                  id="pledge"
                  placeholder={minPledgeAmount}
                  bg="white"
                  size="lg"
                  w="28"
                  rounded="full"
                  fontSize="sm"
                  fontWeight="bold"
                  inputMode="numeric"
                  min={minPledgeAmount}
                  color="black"
                  borderColor="gray.300"
                  borderWidth="1px"
                  focusBorderColor="primary.modeCyan"
                  type="number"
                  _hover={{ borderColor: 'gray.500' }}
                  {...register('pledge', {
                    required: `Pledge an amount greater than $${minPledgeAmount}`,
                    min: minPledgeAmount,
                  })}
                />
              </InputGroup>
              {/* <FormErrorMessage rounded="md" fontWeight="bold">
                {errors.pledge && errors.pledge.message}
              </FormErrorMessage> */}
            </FormControl>

            <Button
              colorScheme="teal"
              w="28"
              size="md"
              py="6"
              px="12"
              ml="3"
              isLoading={isSubmitting}
              type="submit"
            >
              Continue
            </Button>
          </Flex>
        </Flex>
      </form>
    </Container>
  );
};

export default ProductItem;
