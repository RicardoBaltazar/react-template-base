import { Card } from '@material-ui/core';
import styled from 'styled-components';
import { Colors } from 'theme';

export const Container = styled(Card)`
  padding: 1rem;
  position: relative;
  overflow: visible;

  p {
    margin: 1.5rem 0 0 3rem;
  }
`;

interface TitleProps {
  color: 'primary' | 'secondary' | 'light';
}

export const Title = styled(Card)<TitleProps>`
  position: absolute;
  top: -20px;
  left: 20px;
  height: 40px;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  color: #fff;
  text-transform: uppercase;
  background-color: ${({ color }) => {
    switch (color) {
      case 'light':
        return Colors.primary.light;
      case 'secondary':
        return Colors.secondary.main;
      case 'primary':
      default:
        return Colors.primary.main;
    }
  }};
`;
