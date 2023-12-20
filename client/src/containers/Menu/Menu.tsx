import SiteMap from "@/routes/SiteMap"
import { NavLink, useLocation } from "react-router-dom"

import { useColorMode } from "@/context/ColorModeContext"
import { Menu as LibMenu, Switch } from "antd"

/**
 * Menu de l'application
 */
const Menu = () => {
  const links = [SiteMap.ACCUEIL]

  const location = useLocation()
  const tabsValue = links.map(link => link.path).find(path => location.pathname.includes(path)) ?? "false"

  const { darkMode, toggleColorMode } = useColorMode()

  const items = links.map(link => (
    <LibMenu.Item key={link.path}>
      <span>{link.label}</span>
      <NavLink to={link.path} />
    </LibMenu.Item>
  ))

  return (
    <LibMenu selectedKeys={[tabsValue]} mode="horizontal">
      {items}
      <LibMenu.Item key="darkmode" style={{ flexGrow: 1, justifyContent: "flex-end", display: "flex" }}>
        <Switch checkedChildren="🌜" unCheckedChildren="🌞" checked={darkMode} onChange={toggleColorMode} />
      </LibMenu.Item>
    </LibMenu>
  )
}

export default Menu
