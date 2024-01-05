import "@testing-library/jest-dom/vitest";
import createFetchMock from "vitest-fetch-mock";
import { vi } from "vitest";
import "./AnimateMock";

const fetchMocker = createFetchMock(vi);

// sets globalThis.fetch and globalThis.fetchMock to our mocked version
fetchMocker.enableMocks();
