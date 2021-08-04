import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 1.5rem;
`;

export const Content = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h4 {
    margin-bottom: 1.5rem;
  }

  & > button {
    margin: 1.5rem 0;
  }
`;
