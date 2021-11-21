import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 56px;
`;

export const LogoutBtn = styled.button`
  margin: 75px 0 0 0;
  width: 300px;
  border: none;
  background: #f03e3e;
  color: white;
  font-size: 48px;
  border-radius: 1rem;
  cursor: pointer;
  padding: 1rem 0 1rem 0;
`;
