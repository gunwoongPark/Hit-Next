import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 120px - 60px);
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const ErrorTxtContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgContainer = styled.div`
  margin: auto;
  width: 300px;
`;
