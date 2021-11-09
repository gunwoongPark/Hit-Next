import React from 'react';
import { Container, Nav, NavContainer, Title } from '../styles/Header';
import { NextRouter, useRouter } from 'next/router';

export default function Header() {
  const router: NextRouter = useRouter();
  const goLink = (target: string) => {
    switch (target) {
      case 'home':
        router.push('/');
        break;

      default:
    }
  };

  return (
    <Container>
      <Title onClick={() => goLink('home')}>Title</Title>
      <NavContainer>
        <Nav onClick={() => goLink('home')}>Home</Nav>
        <Nav>Cart</Nav>
        <Nav>About</Nav>
      </NavContainer>
    </Container>
  );
}
