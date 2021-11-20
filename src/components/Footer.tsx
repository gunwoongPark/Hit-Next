import React from 'react';
import { Container } from '../styles/Footer';
import { NextRouter, useRouter } from 'next/router';

export default function Footer() {
  const router: NextRouter = useRouter();
  return <Container asPath={router.asPath}>© 2021 Copyright gunwoongPark</Container>;
}
