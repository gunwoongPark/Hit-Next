import React from 'react';
import { Container, ErrorTxtContainer, Title } from './styles/404';
import OkayMan from '../assets/Okay.png';

export default function Custom404() {
  return (
    <Container>
      <img src={OkayMan} alt="OkayMan" />
      <ErrorTxtContainer>
        <Title>404 Not Found</Title>
      </ErrorTxtContainer>
    </Container>
  );
}
