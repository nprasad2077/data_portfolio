import { lazy, Suspense } from 'react';
import { Hero } from '../components/sections/Hero';

const BelowFold = lazy(() => import('../components/sections/BelowFold'));

function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <BelowFold />
      </Suspense>
    </>
  );
}

export default Home;
