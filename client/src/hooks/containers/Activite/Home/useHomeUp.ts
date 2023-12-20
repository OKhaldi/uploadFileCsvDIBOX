import { type Me } from "@/interfaces/services/meService/Me"
import MeService from "@/services/meService"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

const useHome = () => {
  const [userName, setUserName] = useState("")

  const { data, isFetched } = useQuery<Me>({
    queryKey: [],
    queryFn: async (id: string) => await MeService.get(id)
  })

  useEffect(() => {
    if (data !== undefined) setUserName(data?.name)
  }, [data, isFetched])

  const { mutate: getMe } = useMutation({ mutationFn: async (id: string) => await MeService.get(id) })

  return { userName, getMe }
}

export default useHome
