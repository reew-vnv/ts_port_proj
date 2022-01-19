import React, { Suspense } from 'react';
import { svgType } from '../type';

const LogOutSVGLazy = React.lazy(() => import(/* webpackChunkName: "LogOutSVG" */'./LogOut'));

// eslint-disable-next-line no-undef
export const LogOutSVG = (params: JSX.IntrinsicAttributes & svgType) => (
  <Suspense fallback={null}>
    <LogOutSVGLazy {...params} />
  </Suspense>
);
