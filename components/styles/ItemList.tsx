import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  background-size: contain;
  align-items: center;
  margin: 50px;
`;

export const ItemImage = styled.img`
  width: fit-content;
`;

export const ItemName = styled.p`
  text-align: center;
  width: 60%;
  font-size: 17px;
`;

export const ItemPrice = styled.p`
  color: #228be6;
  font-weight: 700;
  font-size: 17px;
`;
