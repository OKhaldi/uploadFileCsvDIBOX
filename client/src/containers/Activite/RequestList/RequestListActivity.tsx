import useListRequest from "@/hooks/containers/Activite/RequestList/useListRequest"
import type Request from "@/interfaces/services/requestService/Request"
import Table from "antd/es/table"
import { columns } from "./const"

/**
 * Activité listant les requêtes
 */
const RequestListActivity = () => {
  const { response, paginationParams } = useListRequest()

  return (
    <>
      Liste des requetes
      <Table<Request> rowKey="uuid" columns={columns} dataSource={response?.content} pagination={paginationParams} />
    </>
  )
}

export default RequestListActivity
