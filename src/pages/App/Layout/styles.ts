import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
`;

interface ContentProps {
  isAuth: boolean;
}

export const Content = styled.div<ContentProps>`
  margin-top: ${({ isAuth }) => (isAuth ? '70px' : 'unset')};
`;
