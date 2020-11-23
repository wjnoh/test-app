import React, { FC, memo } from 'react'
import LazyLoad from 'react-lazyload';

interface Props {
  src: string;
  alt: string;
}

const ImageCard: FC<Props> = memo(({ src, alt }) => {
  return (
    <LazyLoad once>
      <img src={src} alt={alt} style={{ height: '200px' }} />
    </LazyLoad>
  )
})

export default ImageCard