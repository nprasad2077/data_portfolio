import { lazy, Suspense } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';

const Home = lazy(() => import('./pages/Home'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Suspense fallback={<div className="min-h-screen" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
              <Route
                path="*"
                element={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
                      <p className="text-xl text-gray-600 mb-8">Page not found</p>
                      <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium">
                        Go Home
                      </Link>
                    </div>
                  </div>
                }
              />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </div>
    </Router>
  );
}

export default App;
