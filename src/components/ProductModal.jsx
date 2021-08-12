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

const ProductModal = ({ isOpen, onClose, thankYouOnOpen }) => {
  const [value, setValue] = useState(null);

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

          <RadioGroup onChange={setValue} value={value}>
            <Stack spacing="4">
              <ProductItem
                title="Pledge with no reward"
                desc="Choose to support us with no reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
                value="0"
                selectedValue={value}
                onClose={onClose}
                thankYouOnOpen={thankYouOnOpen}
              />
              <ProductItem
                title="Bamboo Stand"
                desc="You get a Black Special Edition computer stand and a personal
                  thank you. You'll be added to our Backer member list. Shipping
                  is included."
                minPledgeAmount={25}
                ticketsTotal={2000}
                ticketsLeft={1930}
                availability="available"
                value="1"
                selectedValue={value}
                onClose={onClose}
                thankYouOnOpen={thankYouOnOpen}
              />
              <ProductItem
                title="Black Edition Stand"
                desc="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."
                minPledgeAmount={75}
                ticketsTotal={400}
                ticketsLeft={378}
                availability="available"
                value="2"
                selectedValue={value}
                onClose={onClose}
                thankYouOnOpen={thankYouOnOpen}
              />
              <ProductItem
                title="Mahogany Special Edition"
                desc="You get two Special Edition Mahogany stands, a Backer T-shirt and a personal thank you. You'll be added to our Backer member list. Shipping is included."
                minPledgeAmount={200}
                ticketsTotal={100}
                ticketsLeft={94}
                availability="available"
                value="3"
                selectedValue={value}
                onClose={onClose}
                thankYouOnOpen={thankYouOnOpen}
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
