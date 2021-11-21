import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background: #282c34;
  color: white;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  margin: 0 0 0 1rem;
  cursor: pointer;
`;

export const NavContainer = styled.ul`
  margin: 0 1rem 0 0;
  list-style: none;
  display: flex;
`;

export const Nav = styled.li`
  & + & {
    margin-left: 1.5rem;
  }
  font-size: 17px;
  cursor: pointer;
`;
