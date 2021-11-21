import React from 'react';
import {
  Container,
  FormContainer,
  Label,
  Input,
  Submit,
} from '../styles/login';
import Head from 'next/head';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  const login = () => {
    axios.post('/api/login').then((res) => {
      if (res.status === 200) {
        router.push('/admin');
      }
    });
  };
  return (
    <>
      <Head>
        <title>LOGIN</title>
        <meta name="description" content="This is Login page" />
      </Head>
      <Container>
        <FormContainer>
          <Label>ID</Label>
          <Input placeholder="Input your ID" />
        </FormContainer>

        <FormContainer>
          <Label>PW</Label>
          <Input placeholder="Input your PW" />
        </FormContainer>

        <Submit onClick={login}>Login</Submit>
      </Container>
    </>
  );
}
