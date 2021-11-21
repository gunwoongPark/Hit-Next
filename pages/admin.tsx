import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Container, Title, LogoutBtn } from '../styles/admin';

export default function Admin() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  const checkLogin = () => {
    axios.get('/api/isLogin').then((res) => {
      if (res.status === 200 && res.data.name) {
        setIsLogin(true);
      } else {
        router.push('/login');
      }
    });
  };

  const logout = () => {
    axios.get('/api/logout').then((res) => {
      if (res.status === 200) {
        router.push('/');
      }
    });
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <Container>
      <Title>This is Admin page !!</Title>
      {isLogin && <LogoutBtn onClick={logout}>Logout</LogoutBtn>}
    </Container>
  );
}
