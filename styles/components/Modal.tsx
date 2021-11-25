import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 400px;
  height: 300px;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 5rem 0 0 0;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  margin: 4rem 0 0 0;
  display: flex;
  width: 200px;
  justify-content: space-between;
`;

interface PropType {
  btnType: string;
}
export const Button = styled.button`
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  padding: 1rem;
  font-size: 1rem;
  ${(props: PropType) =>
    props.btnType === 'goCart'
      ? css`
          background: #fd7e14;
          color: white;
        `
      : css`
          background: #ced4da;
          color: black;
        `};
`;
