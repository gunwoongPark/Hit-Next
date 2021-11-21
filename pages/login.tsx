import React from 'react';
import {
  Container,
  FormContainer,
  Label,
  Input,
  Submit,
} from '../styles/login';

export default function Login() {
  return (
    <Container>
      <FormContainer>
        <Label>ID</Label>
        <Input placeholder="Input your ID" />
      </FormContainer>

      <FormContainer>
        <Label>PW</Label>
        <Input placeholder="Input your PW" />
      </FormContainer>

      <Submit>Login</Submit>
    </Container>
  );
}
