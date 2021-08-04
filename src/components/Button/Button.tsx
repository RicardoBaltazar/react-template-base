import React from 'react';
import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
  CircularProgress,
} from '@material-ui/core';

interface ButtonProps extends MUIButtonProps {
  loading?: boolean;
}

export default function Button(props: ButtonProps) {
  const {
    loading,
    disabled,
    endIcon,
    color = 'primary',
    fullWidth = true,
    ...rest
  } = props;

  return (
    <MUIButton
      disabled={disabled || loading}
      disableElevation
      color={color}
      variant='contained'
      fullWidth={fullWidth}
      endIcon={loading ? <CircularProgress size={15} /> : endIcon}
      {...rest}
    />
  );
}
