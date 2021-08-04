import styled from 'styled-components';
import { Colors } from 'theme';

export const Container = styled.div`
  padding: 2rem 1.5rem;
  display: flex;
  justify-content: center;
  background-color: ${Colors.light};
`;

export const CardsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > div {
    flex-basis: calc(40%);
    margin: 2rem;
  }
`;
