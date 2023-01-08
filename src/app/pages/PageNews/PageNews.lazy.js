import React, { lazy, Suspense } from 'react';

const LazyPageNews = lazy(() => import('./PageNews'));

const PageNews = props => (
  <Suspense fallback={null}>
    <LazyPageNews {...props} />
  </Suspense>
);

export default PageNews;
