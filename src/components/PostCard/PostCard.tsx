import { Typography } from '@material-ui/core';
import React from 'react';

import { Container, Title } from './styles';

interface PostCardProps {
  content: string;
  title: string;
  color: 'primary' | 'secondary' | 'light';
}

export default function PostCard(props: PostCardProps) {
  const { color, content, title } = props;

  return (
    <Container>
      <Title color={color}>{title}</Title>
      <Typography>{content}</Typography>
    </Container>
  );
}
