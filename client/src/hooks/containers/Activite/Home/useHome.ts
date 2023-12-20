import { type Me } from "@/interfaces/services/meService/Me"
import MeService from "@/services/meService"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

const useHome = () => {
  const [userName, setUserName] = useState("")

  /* const { data, isFetched } = useQuery<Me>({
    queryKey: [],
    queryFn: async () => await MeService.get()
  })

  useEffect(() => {
    if (data !== undefined) setUserName(data?.name)
  }, [data, isFetched]) */

  const { mutate: getMe } = useMutation({ mutationFn: async () => await MeService.get() })

  return { userName, getMe }
}

export default useHome
