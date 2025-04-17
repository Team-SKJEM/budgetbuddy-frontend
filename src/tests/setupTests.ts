import "@testing-library/jest-dom";

// Mock ResizeObserver for Jest
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserver;
