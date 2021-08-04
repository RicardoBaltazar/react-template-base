import React from 'react';

import { CSSTransition } from 'react-transition-group';
import { Wrapper, TransitionGroup, ContentSection } from './styles';

interface FadeInProps {
  transitionKey: any;
  children: any;
}

export default function FadeIn(props: FadeInProps) {
  const { transitionKey, children } = props;

  return (
    <Wrapper>
      <TransitionGroup>
        <CSSTransition
          key={transitionKey}
          timeout={{ enter: 500, exit: 300 }}
          classNames='fade'
        >
          <ContentSection>{children}</ContentSection>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}
