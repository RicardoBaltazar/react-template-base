import styled from 'styled-components';

import { DialogContent } from '@material-ui/core';

export const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 70%;
  }

  button {
    margin: 1rem 0;
  }
`;
