import { Card } from '@material-ui/core';
import styled from 'styled-components';
import { Colors } from 'theme';

export const Container = styled.form`
  min-height: 100vh;
  background-color: ${Colors.secondary.main};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainCard = styled(Card)`
  padding: 1.5rem;
  width: 400px;
  max-width: 90%;

  img {
    width: 100%;
  }

  button {
    margin-top: 16px;
  }
`;
