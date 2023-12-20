import "@testing-library/jest-dom/vitest"
import { afterAll, beforeAll, vi } from "vitest"
import { server } from "./mocks/server"

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
})
const { getComputedStyle } = window
window.getComputedStyle = elt => getComputedStyle(elt)

beforeAll(() => {
  // Establish requests interception layer before all tests.
  server.listen()
})

afterAll(() => {
  // Clean up after all tests are done, preventing this

  // interception layer from affecting irrelevant tests.

  server.close()
})
