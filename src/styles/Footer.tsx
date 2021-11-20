import styled, { css } from 'styled-components';

interface PropType {
  asPath: string;
}
export const Container = styled.div`
  ${(props: PropType) =>
    props.asPath === '/'
      ? css`
          position: relative;
        `
      : css`
          position: fixed;
          bottom: 0;
        `}
  width: 100%;
  height: 120px;
  background: #282c34;
  color: white;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
