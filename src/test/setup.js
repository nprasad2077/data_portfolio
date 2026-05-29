import '@testing-library/jest-dom';

// Mock IntersectionObserver for react-intersection-observer
class IntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.IntersectionObserver = IntersectionObserver;
