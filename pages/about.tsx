import React from 'react';
import Head from 'next/head';
import { Container, Title, Contents, IconContainer } from './styles/about';
import { BsGithub } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';

export default function About() {
  const contentsTxt = `Next.js 연습을 위한 토이 프로젝트입니다.
  SEO를 위해 SSR을 사용하고 메타 데이터를 적절히 삽입하며,
  SSG와 SSR을 필요한 상황에 맞게 활용했습니다.`;
  return (
    <>
      <Head>
        <title>ABOUT</title>
        <meta name="description" content="This is About page" />
      </Head>

      <Container>
        <Title>This is the Toy Project</Title>
        <Contents>{contentsTxt}</Contents>
        <IconContainer>
          <a href="https://github.com/gunwoongPark/Hit-Next">
            <BsGithub fontSize="64px" />
          </a>
          <a href="mailto:bung1438@gmail.com">
            <GrMail fontSize="64px" />
          </a>
        </IconContainer>
      </Container>
    </>
  );
}
