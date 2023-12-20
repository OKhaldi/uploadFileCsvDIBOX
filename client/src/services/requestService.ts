import type PageResponse from "@/interfaces/services/PageResponse"
import type Paginate from "@/interfaces/services/requestService/Paginate"
import type Request from "@/interfaces/services/requestService/Request"
import api from "./api"
import { get } from "./request/request"

const RequestService = {
  getAll: async (paginate: Paginate) =>
    await get<PageResponse<Request>>(`${api.request.getAll}?page=${paginate.page}&size=${paginate.size}`),
  getUpCsv: async (id: string) => await get<PageResponse<Request>>(`${api.request.getUpCsv}?id=${id}`)
}

export default RequestService
