import React from 'react';
import { Container, Nav, NavContainer, Title } from '../styles/Header';
import Link from 'next/link';

export default function Header() {
  return (
    <Container>
      <Link href="/">
        <a>
          <Title>Title</Title>
        </a>
      </Link>

      <NavContainer>
        <Nav>Home</Nav>
        <Nav>Cart</Nav>
        <Nav>About</Nav>
      </NavContainer>
    </Container>
  );
}
