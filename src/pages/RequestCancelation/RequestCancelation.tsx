import { LinearProgress, Typography } from '@material-ui/core';
import { Button } from 'components';
import { useTypedSelector } from 'hooks';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { StateEnum } from 'shared/enums/state.enum';
import { PostsActions } from 'store/posts';
import { isComplete, isIdle, isLoading } from 'utils';

import { Container, Content } from './styles';

const initialState = {
  value: 0,
  intervalId: 0,
  state: StateEnum.IDLE,
};

export default function RequestCancelation() {
  const [progress, setProgress] = useState(initialState);
  const dispatch = useDispatch();
  const { state: postsState } = useTypedSelector((state) => state.posts);

  useEffect(() => {
    if (isComplete(progress.state)) {
      setTimeout(() => {
        setProgress(initialState);
      }, 500);
    }
  }, [progress.state]);

  function terminate() {
    dispatch(PostsActions.cancelGetPosts());
    clearInterval(progress.intervalId);
    setProgress(initialState);
  }

  function initiate() {
    if (isIdle(progress.state)) {
      dispatch(PostsActions.getPosts(true));
      const interval = setInterval(() => {
        setProgress((p) => {
          const hasFinished = !(p.value + 20 < 100);
          const newValue = hasFinished ? 100 : p.value + 20;
          if (hasFinished) clearInterval(p.intervalId);
          return {
            ...p,
            value: newValue,
            state: hasFinished ? StateEnum.COMPLETE : StateEnum.LOADING,
          };
        });
      }, 1000);
      setProgress((p) => ({ ...p, intervalId: interval }));
    }
  }

  function handleButtonClick() {
    isLoading(progress.state) ? terminate() : initiate();
  }

  const buttonText = isLoading(progress.state)
    ? 'Abort Request'
    : 'Initiate Request';

  return (
    <Container>
      <Content>
        <Typography align='center' variant='h4'>
          Request Cancelation
        </Typography>
        <LinearProgress
          style={{ width: '100%' }}
          variant='determinate'
          value={progress.value}
        />
        <Button onClick={handleButtonClick}>{buttonText}</Button>
        <p>{String(postsState)}</p>
      </Content>
    </Container>
  );
}
