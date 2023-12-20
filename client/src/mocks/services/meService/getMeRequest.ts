import { type Me } from "@/interfaces/services/meService/Me"
import api from "@/services/api"
import { rest } from "msw"
const me: Me = { name: "test user", scopes: [] }

export const getMeOKRequest = rest.get(api.me, async (_req, res, ctx) => {
  return await res(ctx.json(me))
})

export const getMeKORequest = rest.get(
  api.request.getAll,
  async (_req, res, ctx) =>
    await res(
      ctx.status(500),
      ctx.json({
        error: "Internal Server Error"
      })
    )
)
