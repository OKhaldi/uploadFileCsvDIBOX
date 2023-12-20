import { ERROR_AUTHENTIFICATION } from "@/constants/request"
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider
} from "@tanstack/react-query"
import { App } from "antd"

import { useCallback, type PropsWithChildren } from "react"

const QueryClientProvider = ({ children }: PropsWithChildren) => {
  const { notification } = App.useApp()

  const onErrorConnection = useCallback(
    (error: Error) => {
      if (error.message === ERROR_AUTHENTIFICATION) {
        notification.warning({ message: "Vous avez été deconnecté du serveur" })
      }
    },
    [notification]
  )

  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: onErrorConnection
    }),
    mutationCache: new MutationCache({
      onError: onErrorConnection
    })
  })

  return <ReactQueryClientProvider client={queryClient}>{children}</ReactQueryClientProvider>
}

export default QueryClientProvider
