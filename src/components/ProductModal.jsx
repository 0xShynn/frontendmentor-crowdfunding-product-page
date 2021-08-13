import React from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';
import { selectProducts } from '../features/products/productsSlice';

const ProductModal = ({ isOpen, onClose, thankYouModalOnOpen }) => {
  const [value, setValue] = useState(null);
  const products = useSelector(selectProducts);

  function handleRadioValue(value) {
    setValue(value);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent m="6" maxW="730px" bg="white" shadow="xl">
        <ModalHeader as="h2" mt="4" color="black">
          Back this project
        </ModalHeader>
        <ModalCloseButton
          onClick={() => {
            setValue(null);
          }}
          color="black"
          bg="gray.100"
        />
        <ModalBody>
          <Text mb="6">
            Want to support us bringing Mastercraft Bamboo Monitor Rising out in
            the world ?
          </Text>

          <RadioGroup onChange={handleRadioValue} value={value}>
            <Stack spacing="4">
              {products.products.map((product) => {
                return (
                  <ProductItem
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    desc={product.desc}
                    minPledgeAmount={product.minPledgeAmount}
                    quantity={product.quantity}
                    selectedId={value}
                    onClose={onClose}
                    thankYouModalOnOpen={thankYouModalOnOpen}
                    onRadioValueChange={handleRadioValue}
                  />
                );
              })}
            </Stack>
          </RadioGroup>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
