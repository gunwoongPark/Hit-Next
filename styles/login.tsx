import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  & + & {
    margin: 50px 0 0 0;
  }
`;

export const Label = styled.label`
  text-align: left;
  margin: 0 0 5px 0;
  font-size: 25px;
`;

export const Input = styled.input`
  border: 2px solid #dee2e6;
  border-radius: 0.5rem;
  padding: 12.5px;
  outline: none;
  &:focus {
    border: 2px solid black;
  }
`;

export const Submit = styled.button`
  width: 150px;
  margin: 75px 0 0 0;
  border: none;
  padding: 1.25rem;
  cursor: pointer;
  border-radius: 1rem;
  background: #339af0;
  color: white;
`;
