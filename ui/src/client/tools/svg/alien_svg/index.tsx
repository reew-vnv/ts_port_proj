import React, { Suspense } from 'react';
import { svgType } from '../type';

const AlienSVGLazy = React.lazy(() => import(/* webpackChunkName: "AlienSVG" */'./Alien'));

// eslint-disable-next-line no-undef
export const AlienSVG = (params: JSX.IntrinsicAttributes & svgType) => (
  <Suspense fallback={null}>
    <AlienSVGLazy {...params} />
  </Suspense>
);
