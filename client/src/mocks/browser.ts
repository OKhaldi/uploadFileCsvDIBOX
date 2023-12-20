import { setupWorker } from "msw"
import { browserHandlers } from "./handlers"
export const worker = setupWorker(...browserHandlers)
