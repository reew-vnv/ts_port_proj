import React, { Suspense } from 'react';
import { svgType } from '../type';

const InstSVGLazy = React.lazy(() => import(/* webpackChunkName: "InstSVG" */'./Inst'));

// eslint-disable-next-line no-undef
export const InstSVG = (params: JSX.IntrinsicAttributes & svgType) => (
  <Suspense fallback={null}>
    <InstSVGLazy {...params} />
  </Suspense>
);
