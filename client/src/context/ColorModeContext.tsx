import { ConfigProvider, theme } from "antd"
import { createContext, useContext, useMemo, useState, type PropsWithChildren } from "react"

const defaultColorModeContext = { darkMode: false, toggleColorMode: () => {} }
const ColorModeContext = createContext(defaultColorModeContext)

export const ColorModeProvider = ({ children }: PropsWithChildren) => {
  const windowQuery = window.matchMedia("(prefers-color-scheme:dark)")

  const [darkMode, setDarkMode] = useState(windowQuery.matches)

  const toggleColorMode = () => {
    setDarkMode(mode => !mode)
  }

  const configTheme = useMemo(
    () => ({
      algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm
    }),
    [darkMode]
  )

  return (
    <ColorModeContext.Provider value={{ darkMode, toggleColorMode }}>
      <ConfigProvider theme={configTheme}>{children}</ConfigProvider>
    </ColorModeContext.Provider>
  )
}

export const useColorMode = () => {
  const context = useContext(ColorModeContext)
  if (context === undefined) {
    throw new Error("useColorMode must be used within a ColorModeProvider")
  }
  return context
}
