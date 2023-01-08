import React, { lazy, Suspense } from 'react';

const LazyPageLogin = lazy(() => import('./PageLogin'));

const PageLogin = props => (
  <Suspense fallback={null}>
    <LazyPageLogin {...props} />
  </Suspense>
);

export default PageLogin;
