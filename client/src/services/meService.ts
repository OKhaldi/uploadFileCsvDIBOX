import { type Me } from "@/interfaces/services/meService/Me"
import api from "./api"
import { get } from "./request/request"

const MeService = {
  get: async () => await get<Me>(api.me)
}

export default MeService
