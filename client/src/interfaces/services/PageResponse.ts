export default interface PageResponse<TContent> {
  content: TContent[]
  first: boolean
  last: boolean
  totalPages: number
  size: number
  totalElements: number
  number: number
}
