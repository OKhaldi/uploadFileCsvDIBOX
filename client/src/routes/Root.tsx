import { lazy } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import RequestListActivity from "@/containers/Activite/RequestList/RequestListActivity"
import Layout from "@/containers/Layout/Layout"
import SiteMap from "./SiteMap"

/* Composant de page NotFound */

/* Liste des Path à utiliser */
const HomeActivity = lazy(async () => await import("@/containers/Activite/Home/HomeActivity"))

const Root = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path={SiteMap.ACCUEIL.path} element={<HomeActivity />} />
        <Route index path={SiteMap.REQUEST.path} element={<RequestListActivity />} />
      </Route>

      <Route path="*" element={<Navigate replace to={SiteMap.ACCUEIL.path} />} />
    </Routes>
  )
}

export default Root
