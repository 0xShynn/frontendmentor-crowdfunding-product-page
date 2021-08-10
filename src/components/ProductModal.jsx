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
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import ProductItem from './ProductItem';

const ProductModal = ({ isOpen, onClose }) => {
  const [value, setValue] = useState('');
  console.log(value);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent m="6">
        <ModalHeader as="h2" mt="4">
          Back this project
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb="6">
            Want to support us bringing Mastercraft Bamboo Monitor Rising out in
            the world ?
          </Text>

          <RadioGroup onChange={setValue} value={value}>
            <Stack spacing="4">
              <ProductItem
                title="Bamboo Stand"
                desc="You get a Black Special Edition computer stand and a personal
                  thank you. You'll be added to our Backer member list. Shipping
                  is included."
                minPledgeAmount={25}
                ticketsTotal={200}
                ticketsLeft={34}
                availability="available"
                value="1"
              />
              <ProductItem
                title="Bamboo Edition Stand"
                desc="You get a Black Special Edition computer stand and a personal
                  thank you. You'll be added to our Backer member list. Shipping
                  is included."
                minPledgeAmount={25}
                ticketsTotal={200}
                ticketsLeft={34}
                availability="available"
                value="2"
              />
              <ProductItem
                title="Bamboo Edition Stand"
                desc="You get a Black Special Edition computer stand and a personal
                  thank you. You'll be added to our Backer member list. Shipping
                  is included."
                minPledgeAmount={25}
                ticketsTotal={200}
                ticketsLeft={34}
                availability="available"
                value="3"
              />
            </Stack>
          </RadioGroup>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
