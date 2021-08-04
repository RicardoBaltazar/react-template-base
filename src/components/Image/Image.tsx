import React, { ImgHTMLAttributes, useState } from 'react';

import { CircularProgress } from '@material-ui/core';
import { LoadingContainer, ResponsiveImg } from './styles';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

export default function Image(props: ImageProps) {
  const [isLoaded, setLoaded] = useState(false);
  const { onLoad, alt = '', draggable = false, ...rest } = props;

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement, Event>) {
    if (onLoad && typeof onLoad === 'function') onLoad(e);

    setLoaded(true);
  }

  return (
    <>
      <ResponsiveImg
        alt={alt}
        draggable={draggable}
        onLoad={onImageLoad}
        {...rest}
      />
      {!isLoaded && (
        <LoadingContainer>
          <CircularProgress />
        </LoadingContainer>
      )}
    </>
  );
}
