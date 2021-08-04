import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';

interface NavOptionProps {
  icon: React.ReactNode;
  route: string;
  text: string;
  redirect: (route: string) => void;
}

export default function NavOption(props: NavOptionProps) {
  const { icon, route, text, redirect } = props;

  return (
    <ListItem button onClick={() => redirect(route)}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>{text}</ListItemText>
    </ListItem>
  );
}
