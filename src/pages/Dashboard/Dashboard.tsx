import React, { useMemo } from 'react';

import { PostCard } from 'components';
import { Container, CardsSection } from './styles';
import { useDispatch } from 'react-redux';
import { useMount, useTypedSelector } from 'hooks';
import { PostsActions } from 'store/posts';
import { isLoading } from 'utils';
import { CircularProgress } from '@material-ui/core';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { data: posts, state: postsState } = useTypedSelector(
    (state) => state.posts,
  );

  useMount(() => {
    dispatch(PostsActions.getPosts());
  });

  function randomizeColor(): any {
    const number = Math.floor(Math.random() * 10) % 3;
    const colors = ['primary', 'secondary', 'light'];
    return colors[number];
  }

  const cards = useMemo(
    () =>
      posts.map((post) => (
        <PostCard
          color={randomizeColor()}
          content={post.body}
          title={post.title}
          key={post.id}
        />
      )),
    [posts],
  );

  return (
    <Container>
      <CardsSection>
        {isLoading(postsState) ? <CircularProgress /> : cards}
      </CardsSection>
    </Container>
  );
}
