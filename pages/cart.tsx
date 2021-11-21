import React from 'react';
import { Container } from '../styles/components/Cart';
import Head from 'next/head';

export default function Cart() {
  return (
    <>
      <Head>
        <title>CART</title>
        <meta name="description" content="This is Cart page" />
      </Head>
      <Container>Cart!!!</Container>
    </>
  );
}
