export default interface Request {
  uuid: string
  timestamp: string
  verb: string
  path: string
  host: string
  appName: string
  status?: number
  queryString?: string
}
