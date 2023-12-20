import api from "@/services/api"
import { rest } from "msw"
import { paginateObject } from "./paginateUtils"
import generateRequest from "./requestUtils"

export const getAllRequestPaginatedOkMock = rest.get(api.request.getAll, async (req, res, ctx) => {
  const page = parseInt(req.url.searchParams.get("page") ?? "")
  const size = parseInt(req.url.searchParams.get("size") ?? "")

  return await res(ctx.json(paginateObject(generateRequest(70), { page, size })))
})

export const getAllRequestPaginateKoMock = rest.get(
  api.request.getAll,
  async (_req, res, ctx) =>
    await res(
      ctx.status(500),
      ctx.json({
        error: "Internal Server Error"
      })
    )
)
