import styled from 'styled-components';

import { AppBar } from '@material-ui/core';

export const Container = styled(AppBar)`
  display: flex;
  align-items: center;
  padding: 0.5rem 3rem;
  flex-direction: row;
`;

export const LeftSection = styled.section`
  display: flex;
  align-items: center;

  svg {
    color: #fff;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;

  button {
    &::first-of-type {
      margin-right: 0.5rem;
    }
  }
`;
