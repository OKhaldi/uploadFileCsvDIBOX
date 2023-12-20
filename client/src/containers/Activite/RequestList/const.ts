import type Request from "@/interfaces/services/requestService/Request"
import { type ColumnsType } from "antd/es/table"

export const columns: ColumnsType<Request> = [
  {
    key: "uuid",
    title: "UUID",
    dataIndex: "uuid"
  },
  {
    key: "timestamp",
    title: "timestamp",
    dataIndex: "timestamp"
  },
  {
    key: "path",
    title: "path",
    dataIndex: "path"
  },
  {
    key: "verb.name",
    title: "verb",
    dataIndex: "verb"
  },
  {
    key: "host.name",
    title: "host",
    dataIndex: "host"
  },
  {
    key: "appName.name",
    title: "App Name",
    dataIndex: "appName"
  },
  {
    key: "queryString",
    title: "Query Parameters",
    dataIndex: "queryString"
  },
  {
    key: "status",
    title: "Status",
    dataIndex: "status"
  }
]
