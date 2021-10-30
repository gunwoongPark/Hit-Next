import React from 'react';
import { Container, Nav, NavContainer, Title } from '../styles/Header';

export default function Header() {
  return (
    <Container>
      <Title>Title</Title>

      <NavContainer>
        <Nav>Home</Nav>
        <Nav>Cart</Nav>
        <Nav>About</Nav>
      </NavContainer>
    </Container>
  );
}
