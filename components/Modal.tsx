import React, { SetStateAction, Dispatch } from 'react';
import {
  Container,
  Title,
  ButtonContainer,
  Button,
  Dim,
} from '../styles/components/Modal';
import { NextRouter, useRouter } from 'next/router';

interface PropType {
  setModal: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({ setModal }: PropType) {
  const router: NextRouter = useRouter();

  const goCart = () => {
    router.push('/cart');
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <Container>
        <Title>{`The item  is in the shopping basket.`}</Title>
        <ButtonContainer>
          <Button btnType={'goCart'} onClick={goCart}>
            Go Cart
          </Button>
          <Button btnType={'cancel'} onClick={closeModal}>
            Cancel
          </Button>
        </ButtonContainer>
      </Container>

      <Dim onClick={closeModal} />
    </>
  );
}
