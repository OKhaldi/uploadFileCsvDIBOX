import type Request from "@/interfaces/services/requestService/Request"

export const status = [200, 201, 500, 404, 400, 401]
export const verb = ["GET", "POST", "PUT", "DELETE", "PATCH"]
export const host = ["localhost", "prod", "dev"]
export const appName = ["App 1", "App 2"]
export const path = ["/path1", "/path2", "/path3", "/path4"]

const generateRequest: (number: number) => Request[] = (number: number) =>
  new Array(number).fill("").map((_, index: number) => ({
    uuid: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    verb: verb[index % verb.length],
    path: path[index % path.length],
    host: host[index % host.length],
    appName: appName[index % appName.length],
    status: status[index % status.length],
    queryString: undefined
  }))

export default generateRequest
