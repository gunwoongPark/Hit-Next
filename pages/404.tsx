import React from 'react';
import { Container, ImgContainer, ErrorTxtContainer, Title } from './styles/404';
import Image from 'next/image';
import OkayMan from '../public/assets/Okay.png';

export default function Custom404() {
  return (
    <Container>
      <ImgContainer>
        <Image src={OkayMan} />
      </ImgContainer>
      <ErrorTxtContainer>
        <Title>404 Not Found</Title>
      </ErrorTxtContainer>
    </Container>
  );
}
