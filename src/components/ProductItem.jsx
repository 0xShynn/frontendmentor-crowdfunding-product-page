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
  Link,
} from '@chakra-ui/react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addNewBacker } from '../features/backers/backersSlice';
import { addFunds } from '../features/funds/fundsSlice';
import { addOrder } from '../features/products/productsSlice';

const ProductItem = ({
  title,
  desc,
  minPledgeAmount,
  quantity,
  id,
  selectedId,
  onClose,
  thankYouModalOnOpen,
  onRadioValueChange,
}) => {
  const dispatch = useDispatch();

  const itemNoPledge = id === '0';
  const itemIsAvailable = quantity > 0;

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    if (itemIsAvailable) {
      return new Promise((resolve) => {
        setTimeout(() => {
          dispatch(addNewBacker());
          dispatch(addFunds(+values.pledge));
          dispatch(addOrder(selectedId, 1));
          onClose();
          resolve();
          thankYouModalOnOpen();
        }, 1000);
      });
    }
  }

  const handleSelectTitle = useCallback(() => {
    onRadioValueChange(id);
  }, [id, onRadioValueChange]);

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
      isDisabled={quantity === 0 ? true : false}
    />
  );

  return (
    <Container
      rounded="lg"
      borderWidth="2px"
      m="0"
      p="0"
      borderColor={
        id === selectedId && itemIsAvailable ? 'primary.modeCyan' : 'gray.100'
      }
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          p="6"
          // opacity={quantity === 0 ? '0.5' : '1'}
          opacity={itemIsAvailable ? '1' : '0.5'}
          onClick={handleSelectTitle}
          cursor={itemIsAvailable || itemNoPledge ? 'pointer' : 'not-allowed'}
        >
          {/* mobile header */}
          <Flex display={['flex', 'none']} align="center" mb="4">
            <Flex pr="4" align="flex-start">
              <CustomRadio value={id} />
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
                display={itemNoPledge ? 'none' : 'inline'}
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
            <Flex
              pr="4"
              pt="0.5"
              align="flex-start"
              mt={itemNoPledge ? '0' : '1'}
            >
              <CustomRadio value={id} />
            </Flex>

            <Box>
              <Flex
                direction={['column', 'row']}
                mb="3"
                align={['flex-start', 'center']}
              >
                <Link
                  as="h3"
                  fontSize="md"
                  fontWeight="bold"
                  mr={['0', '4']}
                  mb={['1', '0']}
                  color="black"
                  // _hover={{
                  //   color: 'primary.modeCyan',
                  // }}
                  _hover={
                    itemIsAvailable
                      ? { color: 'primary.modeCyan' }
                      : { color: 'black' }
                  }
                >
                  {title}
                </Link>

                <Text
                  fontWeight="bold"
                  color="primary.modeCyan"
                  mr="2"
                  display={itemNoPledge ? 'none' : 'inline'}
                >
                  Pledge ${minPledgeAmount} or more
                </Text>

                <Flex
                  align="center"
                  justify="flex-end"
                  display={{
                    base: 'none',
                    sm: itemNoPledge ? 'none' : 'flex',
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
                    {quantity}
                  </Text>
                  <Text fontSize="md">left</Text>
                </Flex>
              </Flex>
              <Text mb="4">{desc}</Text>
            </Box>
          </Flex>

          <Flex
            display={selectedId === id && itemNoPledge ? 'flex' : 'none'}
            justify="flex-end"
          >
            <Button
              colorScheme="teal"
              size="md"
              onClick={() => {
                dispatch(addNewBacker());
                onClose();
                thankYouModalOnOpen();
              }}
            >
              Continue
            </Button>
          </Flex>
          <Flex
            align="center"
            display={{ base: itemNoPledge ? 'none' : 'flex', sm: 'none' }}
          >
            <Text
              fontWeight="bold"
              fontFamily="heading"
              color="black"
              fontSize="lg"
              mr="2"
            >
              {quantity}
            </Text>
            <Text fontSize="md">left</Text>
          </Flex>
        </Box>

        {itemIsAvailable ? (
          <Flex
            direction={{ base: 'column', sm: 'row' }}
            align="center"
            p="6"
            borderTopWidth="1px"
            borderTopColor="gray.300"
            display={id === selectedId && id !== '0' ? 'flex' : 'none'}
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
                size="md"
                py="6"
                ml="3"
                isLoading={isSubmitting}
                type="submit"
              >
                Continue
              </Button>
            </Flex>
          </Flex>
        ) : null}
      </form>
    </Container>
  );
};

export default ProductItem;
