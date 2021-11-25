import React, { SetStateAction, Dispatch } from 'react';
import {
  Container,
  Title,
  ButtonContainer,
  Button,
} from '../styles/components/Modal';

interface PropType {
  setModal: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({ setModal }: PropType) {
  return (
    <Container>
      <Title>{`The item  is in the shopping basket.`}</Title>
      <ButtonContainer>
        <Button btnType={'goCart'}>Go Cart</Button>
        <Button btnType={'cancel'} onClick={() => setModal(false)}>
          Cancel
        </Button>
      </ButtonContainer>
    </Container>
  );
}
