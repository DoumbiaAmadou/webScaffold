import React, { lazy, Suspense } from 'react';

const LazyFeatureLogin = lazy(() => import('./FeatureLogin'));

const FeatureLogin = props => (
  <Suspense fallback={null}>
    <LazyFeatureLogin {...props} />
  </Suspense>
);

export default FeatureLogin;
