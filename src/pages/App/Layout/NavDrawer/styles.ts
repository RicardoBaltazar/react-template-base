import styled from 'styled-components';

import { Drawer } from '@material-ui/core';

export const Container = styled(Drawer)`
  .MuiDrawer-paper {
    min-width: 190px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0 1.5rem 0;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
`;
