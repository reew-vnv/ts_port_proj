import React, { Suspense } from 'react';
import { svgType } from '../type';

const GitSVGLazy = React.lazy(() => import(/* webpackChunkName: "GitSVG" */'./Git'));

// eslint-disable-next-line no-undef
export const GitSVG = (params: JSX.IntrinsicAttributes & svgType) => (
  <Suspense fallback={null}>
    <GitSVGLazy {...params} />
  </Suspense>
);
