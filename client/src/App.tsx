import "./App.css"

import { ColorModeProvider } from "@/context/ColorModeContext"
import QueryClientProvider from "@/context/QueryClientContext.tsx"
import { App as AntdApp } from "antd"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes/index.ts"

const App = () => (
  <ColorModeProvider>
    <AntdApp>
      <QueryClientProvider>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AntdApp>
  </ColorModeProvider>
)

export default App
