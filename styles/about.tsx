import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 120px - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 52px;
`;

export const Contents = styled.p`
  white-space: pre-line;
  text-align: center;
  font-size: 20px;
  margin: 50px 0 0 0;
  line-height: 2;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 75px 0 0 0;
  width: 200px;
`;
