import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 120px - 60px);
`;

export const SubContainer = styled.div`
  width: 50%;
  text-align: center;
`;

export const ItemName = styled.h1`
  margin: 0;
`;

export const ItemDesc = styled.p`
  margin-top: 2rem;
  font-size: 17px;
`;

export const ItemPrice = styled.p`
  color: #228be6;
  font-weight: 700;
  font-size: 22px;
  margin-top: 1rem;
`;

export const BtnContainer = styled.div`
  margin-top: 2rem;
`;

interface PropType {
  mode: string;
}
export const Button = styled.button`
  border: none;
  padding: 1.25rem;
  cursor: pointer;
  border-radius: 1rem;

  & + & {
    margin-left: 1rem;
  }

  ${(props: PropType) =>
    props.mode === 'buy'
      ? css`
          background: #fd7e14;
          color: white;
        `
      : css`
          background: #ced4da;
          color: black;
        `}
`;
