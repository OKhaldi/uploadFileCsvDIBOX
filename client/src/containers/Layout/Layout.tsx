import Menu from "@/containers/Menu/Menu"
import { Suspense } from "react"

import { Layout as LibLayout } from "antd"
import { Outlet } from "react-router"
import Footer from "../Footer/Footer"

const { Header, Footer: LibFooter, Content } = LibLayout

const Layout = () => (
  <LibLayout style={{ minHeight: "100vh" }}>
    <Header>
      <Menu />
    </Header>
    <Content>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Content>
    <LibFooter style={{ textAlign: "center" }}>
      <Footer />
    </LibFooter>
  </LibLayout>
)

export default Layout
