import styled from 'styled-components';

import { TransitionGroup as RTransitionGroup } from 'react-transition-group';

export const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms linear;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in-out;
  }
`;

export const ContentSection = styled.section`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`;

export const TransitionGroup = styled(RTransitionGroup)`
  position: relative;
`;
