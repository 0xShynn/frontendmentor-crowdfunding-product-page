import {
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

import React from 'react';

const ThankYouModal = ({ isOpen, onClose, onOpen }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        isCentered
      >
        <ModalOverlay />
        <ModalContent bg="white" shadow="xl" m="6" px="2" py="6">
          <ModalHeader textAlign="center">
            <Flex justify="center">
              <Flex
                bg="primary.modeCyan"
                rounded="full"
                w="16"
                h="16"
                justify="center"
                align="center"
                mb="6"
              >
                <CheckIcon w={8} h={8} color="white" />
              </Flex>
            </Flex>
            <Heading as="h3" fontSize="lg">
              Thank you for your support!
            </Heading>
          </ModalHeader>
          <ModalBody>
            <Text textAlign="center">
              Your pledge brings us one step closer to sharing Mastercraft
              Bamboo Monitor Riser worldwide. You will get an email once our
              coampagne is completed.
            </Text>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button variant="primary" size="lg" mr={3} onClick={onClose}>
              Got it!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ThankYouModal;
