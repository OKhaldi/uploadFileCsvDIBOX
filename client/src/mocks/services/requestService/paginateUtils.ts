import type PageResponse from "@/interfaces/services/PageResponse"
import type Paginate from "@/interfaces/services/requestService/Paginate"

type PaginateObject = <TContent>(objects: TContent[], paginate: Paginate) => PageResponse<TContent>

export const paginateObject: PaginateObject = <TContent>(objects: TContent[], paginate: Paginate) => ({
  content: objects.slice(paginate.size * paginate.page, paginate.size * (paginate.page + 1)),
  first: paginate.page === 0,
  last: Math.ceil(objects.length / paginate.size) - 1 <= paginate.page,
  totalPages: Math.ceil(objects.length / paginate.size),
  size: paginate.size,
  totalElements: objects.length,
  number: paginate.page
})
