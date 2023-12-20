import type Paginate from "@/interfaces/services/requestService/Paginate"
import RequestService from "@/services/requestService"
import { useMutation } from "@tanstack/react-query"
import { App, type TablePaginationConfig } from "antd"
import { useCallback, useEffect, useMemo } from "react"

const useListRequest = () => {
  const { notification } = App.useApp()

  const getAllRequest = useCallback(async (paginate: Paginate) => await RequestService.getAll(paginate), [])

  const onError = useCallback(() => {
    notification.error({
      message: "Une erreur est survenue lors de la récupération des requests",
      duration: 10
    })
  }, [notification])

  const {
    mutate: getRequests,
    data,
    isIdle
  } = useMutation({
    mutationKey: ["requests"],
    mutationFn: getAllRequest,
    onError,
    retry: false
  })

  const onChangePage = useCallback(
    (page: number, size: number) => {
      getRequests({ page: page - 1, size })
    },
    [getRequests]
  )

  useEffect(() => {
    if (isIdle) {
      getRequests({ page: 0, size: 20 })
    }
  }, [])

  const paginationParams: TablePaginationConfig = useMemo(
    () => ({
      total: data?.totalElements,
      showTotal: total => `Total ${total} items`,
      defaultPageSize: 20,
      defaultCurrent: 1,
      onChange: onChangePage
    }),
    [data?.totalElements, onChangePage]
  )

  return { response: data, paginationParams }
}

export default useListRequest
